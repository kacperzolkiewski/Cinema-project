import ResourceProviderService from "./ResourceProvider"

const resources = {}

export default class AppResourceProvider extends ResourceProviderService {
    get(resourceName: keyof typeof resources) {
        return resources[resourceName]
    }
}
