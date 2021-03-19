export interface IStorage {
  getItem(key: string): Nullable<string>
  setItem(key: string, value: string): void
  removeItem(key: string): void
  clear(): void
}
