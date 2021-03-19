import { Action } from "redux"
import { Lang } from "../common/types/Lang"
import * as ActionTypes from "./ActionTypes"

export interface IChangeLangAction extends Action {
  type: typeof ActionTypes.CHANGE_LANG
  lang: Lang
}

export type ActionType = IChangeLangAction
