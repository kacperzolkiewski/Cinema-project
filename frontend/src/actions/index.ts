import { Lang } from "../common/types/Lang"
import { ActionType } from "./ActionInterfaces"
import * as ActionTypes from "./ActionTypes"

export const changeLang = (lang: Lang): ActionType => ({
  type: ActionTypes.CHANGE_LANG,
  lang
})
