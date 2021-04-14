import { IPayment } from "./Payment/IPayment"

type ProviderType = IPayment

class Provider {
  private providers: Map<string, ProviderType>

  constructor() {
    this.providers = new Map<string, ProviderType>()
  }

  provide<T extends ProviderType>(moduleName: string, implementation: T): void {
    this.providers.set(moduleName, implementation)
  }

  get<T extends ProviderType>(moduleName: string): T {
    if (this.providers.has(moduleName)) {
      return this.providers.get(moduleName) as T
    } else {
      throw new Error(`Attempted to get an unregistered provider ${moduleName}`)
    }
  }
}

export default new Provider()
