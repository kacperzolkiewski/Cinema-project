/* eslint-disable import/no-anonymous-default-export */
import persistStorage from "redux-persist/lib/storage"

export default {
  key: "root",
  storage: persistStorage,
  whiteList: []
}
