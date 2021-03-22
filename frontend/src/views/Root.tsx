import React from "react"
import { Provider as StoreProvider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import { Store } from "redux"
import { Persistor } from "redux-persist"
import { PersistGate } from "redux-persist/integration/react"
import App from "./App"

type Props = {
  store: Store
  persistor: Persistor
}

export const Root: React.FC<Props> = ({ store, persistor }) => (
  <StoreProvider store={store}>
    <PersistGate persistor={persistor}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PersistGate>
  </StoreProvider>
)
