import { Injectable, signal } from '@angular/core';
import { BehaviorSubject } from 'rxjs'
import { PlayableContent, PlayerState } from '../../models/playable.model'

interface PersistedState {
  content: PlayableContent
  times: Record<string, number>  // episodeId → seconds
  completed: string[]            // episodeIds that played to the end
}

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  private state: BehaviorSubject<PlayerState>
  private persisted: PersistedState | null = null
  private lastSaveMs = 0

  private readonly _completedIds = signal<ReadonlySet<string>>(new Set())
  readonly completedIds = this._completedIds.asReadonly()

  constructor() {
    this.persisted = this.loadFromStorage()
    this._completedIds.set(new Set(this.persisted?.completed ?? []))
    const initial = this.persisted
      ? { content: this.persisted.content, isPlaying: false, currentTime: this.persisted.times[this.persisted.content.id] ?? 0 }
      : new PlayerState()
    this.state = new BehaviorSubject<PlayerState>(initial)
  }

  performAction(action: 'play' | 'pause' | 'stop' | 'seek', content?: PlayableContent, time?: number) {
    const current = this.state.value

    switch (action) {
      case 'play':
        if (content) {
          const isSame = content.id === current.content?.id
          const currentTime = isSame ? current.currentTime : (this.persisted?.times[content.id] ?? 0)
          this.state.next({ content, isPlaying: true, currentTime })
          this.persistContent(content)
        }
        break
      case 'pause':
        this.state.next({ ...current, isPlaying: false })
        break
      case 'stop':
        this.state.next({ ...current, isPlaying: false, currentTime: 0 })
        if (current.content && this.persisted) {
          const id = current.content.id
          delete this.persisted.times[id]
          if (!this.persisted.completed.includes(id)) {
            this.persisted.completed.push(id)
            this._completedIds.update(s => new Set([...s, id]))
          }
          this.saveToStorage()
        }
        break
      case 'seek':
        if (typeof time === 'number') {
          this.state.next({ ...current, currentTime: time })
          if (current.content) {
            this.throttledSaveTime(current.content.id, time)
          }
        }
        break
    }
  }

  getState() {
    return this.state.asObservable()
  }

  private persistContent(content: PlayableContent): void {
    if (!this.persisted) {
      this.persisted = { content, times: {}, completed: [] }
    } else {
      this.persisted.content = content
    }
    this.saveToStorage()
  }

  private throttledSaveTime(episodeId: string, time: number): void {
    const now = Date.now()
    if (now - this.lastSaveMs < 5000) return
    this.lastSaveMs = now
    if (!this.persisted) return
    this.persisted.times[episodeId] = time
    this.saveToStorage()
  }

  private loadFromStorage(): PersistedState | null {
    try {
      const raw = localStorage.getItem('player-state')
      if (!raw) return null
      const parsed = JSON.parse(raw) as Partial<PersistedState>
      if (!parsed.content?.id || !parsed.content?.link) return null
      return { content: parsed.content, times: parsed.times ?? {}, completed: parsed.completed ?? [] }
    } catch {
      return null
    }
  }

  private saveToStorage(): void {
    try {
      localStorage.setItem('player-state', JSON.stringify(this.persisted))
    } catch { /* private mode */ }
  }
}
