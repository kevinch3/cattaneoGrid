/**
 * Thin IndexedDB wrapper for storing downloaded episode blobs.
 * No external dependencies, minimal API surface.
 */

const DB_NAME = 'cattaneo-episodes'
const STORE_NAME = 'blobs'
const VERSION = 1

export interface BlobRecord {
  id: string
  blob: Blob
  title: string
  storedAt: number
}

let dbPromise: Promise<IDBDatabase> | null = null

/**
 * Module-level cached promise for opening the database.
 * Subsequent calls return the same promise.
 */
export function openDb(): Promise<IDBDatabase> {
  if (dbPromise) return dbPromise

  dbPromise = new Promise((resolve, reject) => {
    const req = indexedDB.open(DB_NAME, VERSION)

    req.onerror = () => {
      dbPromise = null
      reject(req.error)
    }

    req.onsuccess = () => {
      resolve(req.result)
    }

    req.onupgradeneeded = event => {
      const db = (event.target as IDBOpenDBRequest).result
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: 'id' })
      }
    }
  })

  return dbPromise
}

/**
 * Retrieve a record by episode ID.
 */
export async function getRecord(id: string): Promise<BlobRecord | undefined> {
  const db = await openDb()
  return new Promise((resolve, reject) => {
    const tx = db.transaction([STORE_NAME], 'readonly')
    const store = tx.objectStore(STORE_NAME)
    const req = store.get(id)

    req.onsuccess = () => resolve(req.result as BlobRecord | undefined)
    req.onerror = () => reject(req.error)
  })
}

/**
 * Store or update a record.
 */
export async function putRecord(record: BlobRecord): Promise<void> {
  const db = await openDb()
  return new Promise((resolve, reject) => {
    const tx = db.transaction([STORE_NAME], 'readwrite')
    const store = tx.objectStore(STORE_NAME)
    const req = store.put(record)

    req.onsuccess = () => resolve()
    req.onerror = () => reject(req.error)
  })
}

/**
 * Delete a record by episode ID.
 */
export async function deleteRecord(id: string): Promise<void> {
  const db = await openDb()
  return new Promise((resolve, reject) => {
    const tx = db.transaction([STORE_NAME], 'readwrite')
    const store = tx.objectStore(STORE_NAME)
    const req = store.delete(id)

    req.onsuccess = () => resolve()
    req.onerror = () => reject(req.error)
  })
}

/**
 * List all episode IDs currently in storage.
 */
export async function getAllKeys(): Promise<string[]> {
  const db = await openDb()
  return new Promise((resolve, reject) => {
    const tx = db.transaction([STORE_NAME], 'readonly')
    const store = tx.objectStore(STORE_NAME)
    const req = store.getAllKeys()

    req.onsuccess = () => resolve((req.result as string[]) ?? [])
    req.onerror = () => reject(req.error)
  })
}
