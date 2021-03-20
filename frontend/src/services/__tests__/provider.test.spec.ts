import LocalStorageService from "../Storage/LocalStorage"
import provider from "../provider"

test("Put and return the same service from provider", () => {
  provider.provide("storage", new LocalStorageService())

  expect(provider.get("storage")).toBeInstanceOf(LocalStorageService)
})

test("Provider should throw an error", () => {
  const moduleName = "noModule"
  expect(() => provider.get(moduleName)).toThrow(
    `Attempted to get an unregistered provider ${moduleName}`
  )
})
