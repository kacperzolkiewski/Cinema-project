class Provider {
    _providers: Map<string, unknown>

    constructor() {
        this._providers = new Map<string, unknown>()
    }

    provide(moduleName: string, implementation: unknown): void {
        this._providers.set(moduleName, implementation)
    }

    get<T>(moduleName: string): T {
        if (this._providers.has(moduleName)) {
            return <T> this._providers.get(moduleName)
        } else {
            throw new Error(`Attempt to get an unregistered provider ${moduleName}`)
        }
    }
}

export default new Provider()
