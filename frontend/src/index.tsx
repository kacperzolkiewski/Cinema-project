import "./index.css"
import ReactDOM from "react-dom"
import LocaleService from "./services/Locale/Locale"
import { IStorage } from "./services/Storage/IStorage"
import LocalStorageService from "./services/Storage/LocalStorage"
import provider from "./services/provider"
import stores from "./store"
import { Root } from "./views/Root"

const init = (): void => {
  provider.provide("storage", new LocalStorageService())
  provider.provide(
    "locale",
    new LocaleService(provider.get<IStorage>("storage"), ["en", "pl"])
  )

  ReactDOM.render(
    <Root store={stores.store} persistor={stores.persistor} />,
    document.getElementById("root")
  )
}

init()
