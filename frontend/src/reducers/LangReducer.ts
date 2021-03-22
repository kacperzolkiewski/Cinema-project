import { ActionType } from "../actions/ActionInterfaces"
import * as ActionTypes from "../actions/ActionTypes"
import { Lang } from "../common/types/Lang"

export const LangReducer = (
  state: {
    lang: Lang
  } = {
    lang: "pl"
  },
  action: ActionType
) => {
  switch (action.type) {
    case ActionTypes.CHANGE_LANG:
      return { lang: action.lang }
    default:
      return state
  }
}
