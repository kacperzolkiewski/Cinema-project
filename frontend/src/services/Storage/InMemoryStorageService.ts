import { IStorage } from "./IStorage"

let data: Record<string, string> = {}

class InMemoryStorageService implements IStorage {
  getItem(key: string) {
    return data[key] || null
  }

  setItem(key: string, value: string) {
    data[key] = value
  }

  removeItem(key: string) {
    if (key in data) {
      delete data[key]
    }
  }

  clear() {
    data = {}
  }
}

export default InMemoryStorageService
