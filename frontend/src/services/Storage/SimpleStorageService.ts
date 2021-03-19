import { IStorage } from "./IStorage"
import InMemoryStorageService from "./InMemoryStorageService"
import LocalStorageService from "./LocalStorage"

class SimpleStorageService implements IStorage {
  private baseStorage: IStorage

  constructor() {
    if (LocalStorageService.isAvailable()) {
      this.baseStorage = new LocalStorageService()
    } else {
      this.baseStorage = new InMemoryStorageService()
    }
  }

  getItem(key: string) {
    return this.baseStorage.getItem(key)
  }

  setItem(key: string, value: string) {
    return this.baseStorage.setItem(key, value)
  }

  removeItem(key: string) {
    return this.baseStorage.removeItem(key)
  }

  clear() {
    return this.baseStorage.clear()
  }
}

export default SimpleStorageService
