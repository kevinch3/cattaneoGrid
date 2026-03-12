import { Injectable, signal, effect } from '@angular/core'
import { PlayableContent } from '../../models/playable.model'
import * as IDB from './idb'

export interface DownloadEntry {
  id: string
  blobUrl: string
  title: string
  sizeBytes: number
  storedAt: number
}

@Injectable({
  providedIn: 'root'
})
export class DownloadService {
  /**
   * Map of episodeId → DownloadEntry for all downloaded episodes.
   * Updated on service init and after download/delete operations.
   */
  readonly downloaded = signal<ReadonlyMap<string, DownloadEntry>>(new Map())

  /**
   * Map of episodeId → progress percentage (0–100) for active downloads.
   * Cleared when download completes or fails.
   */
  readonly progress = signal<ReadonlyMap<string, number>>(new Map())

  private activeDownloads: Map<string, AbortController> = new Map()

  constructor() {
    // Load blobs from IDB on service init
    this.loadFromIdb()
  }

  /**
   * Start downloading an episode audio file.
   * Fetches from the URL, streams into IndexedDB, creates a blob URL.
   */
  async startDownload(content: PlayableContent): Promise<void> {
    // Prevent duplicate downloads
    if (this.activeDownloads.has(content.id)) return

    const controller = new AbortController()
    this.activeDownloads.set(content.id, controller)

    try {
      const response = await fetch(content.link, {
        signal: controller.signal,
        mode: 'cors'
      })

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`)
      }

      // Read Content-Length for progress tracking; may be unavailable
      const contentLength = response.headers.get('content-length')
      const total = contentLength ? parseInt(contentLength, 10) : null

      const reader = response.body?.getReader()
      if (!reader) throw new Error('No response body')

      const chunks: BlobPart[] = []
      let received = 0

      while (true) {
        const { done, value } = await reader.read()
        if (done) break

        chunks.push(value)
        received += value.byteLength

        // Update progress signal; only if total is known
        if (total) {
          const pct = Math.round((received / total) * 100)
          this.progress.update(m => new Map(m).set(content.id, pct))
        }
      }

      // Create blob and store in IndexedDB
      const blob = new Blob(chunks as BlobPart[], { type: 'audio/mpeg' })
      const blobUrl = URL.createObjectURL(blob)
      const entry: DownloadEntry = {
        id: content.id,
        blobUrl,
        title: content.title,
        sizeBytes: blob.size,
        storedAt: Date.now()
      }

      await IDB.putRecord({
        id: content.id,
        blob,
        title: content.title,
        storedAt: Date.now()
      })

      // Update downloaded signal and clear progress
      this.downloaded.update(m => new Map(m).set(content.id, entry))
      this.progress.update(m => {
        const copy = new Map(m)
        copy.delete(content.id)
        return copy
      })
    } catch (err) {
      if (err instanceof Error && err.name === 'AbortError') {
        // User cancelled; don't log
      } else {
        console.error('Download failed:', err)
      }
      // Clear progress on error
      this.progress.update(m => {
        const copy = new Map(m)
        copy.delete(content.id)
        return copy
      })
    } finally {
      this.activeDownloads.delete(content.id)
    }
  }

  /**
   * Cancel an active download by episode ID.
   */
  cancelDownload(episodeId: string): void {
    const controller = this.activeDownloads.get(episodeId)
    if (controller) {
      controller.abort()
    }
  }

  /**
   * Delete a downloaded episode from IndexedDB and revoke its blob URL.
   */
  async deleteDownload(episodeId: string): Promise<void> {
    const entry = this.downloaded().get(episodeId)
    if (entry) {
      URL.revokeObjectURL(entry.blobUrl)
    }
    await IDB.deleteRecord(episodeId)
    this.downloaded.update(m => {
      const copy = new Map(m)
      copy.delete(episodeId)
      return copy
    })
  }

  /**
   * Get blob URL for an episode if it's downloaded; otherwise null.
   */
  getBlobUrl(episodeId: string): string | null {
    return this.downloaded().get(episodeId)?.blobUrl ?? null
  }

  /**
   * Load all stored episodes from IndexedDB on service init.
   * Creates blob URLs for each stored record.
   */
  private async loadFromIdb(): Promise<void> {
    try {
      const keys = await IDB.getAllKeys()
      const map = new Map<string, DownloadEntry>()

      for (const id of keys) {
        const record = await IDB.getRecord(id as string)
        if (record) {
          const blobUrl = URL.createObjectURL(record.blob)
          map.set(id as string, {
            id: id as string,
            blobUrl,
            title: record.title,
            sizeBytes: record.blob.size,
            storedAt: record.storedAt
          })
        }
      }

      this.downloaded.set(map)
    } catch (err) {
      console.warn('Failed to load downloads from IDB:', err)
    }
  }
}
