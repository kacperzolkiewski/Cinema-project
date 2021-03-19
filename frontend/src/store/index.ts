import rootReducer from "../reducers"
import configureStore from "./configureStore"
import persistConfig from "./persistConfig"

export type AppState = ReturnType<typeof rootReducer>

export default configureStore({ persistConfig })
