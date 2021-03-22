import { IStorage } from "./IStorage"

class LocalStorageService implements IStorage {
  getItem(key: string) {
    return window.localStorage.getItem(key)
  }

  setItem(key: string, value: string) {
    window.localStorage.setItem(key, value)
  }

  removeItem(key: string) {
    window.localStorage.removeItem(key)
  }

  clear() {
    window.localStorage.clear()
  }

  static isAvailable() {
    const storage = new LocalStorageService()

    try {
      const key = "coders"
      const value = "camp"

      storage.setItem(key, value)

      if (storage.getItem(key) !== value) {
        storage.removeItem(key)
        throw new Error("Stored invalid value")
      }
      storage.removeItem(key)
      return true
    } catch (e) {
      return false
    }
  }
}

export default LocalStorageService
