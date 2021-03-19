import { createStore, Store } from "redux"
import { persistStore, persistReducer, PersistConfig } from "redux-persist"
import rootReducer from "../reducers"
import { AppState } from "."

type Params = {
  persistConfig: PersistConfig<AppState>
}

const configureStore = ({ persistConfig }: Params) => {
  const persistedReducer = persistReducer(persistConfig, rootReducer)

  const store: Store<AppState> = createStore(
    persistedReducer,
    //@ts-ignore
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )

  const persistor = persistStore(store)

  return {
    store,
    persistor
  }
}

export default configureStore
