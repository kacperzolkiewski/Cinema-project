import { Lang } from "../../common/types/Lang"

export interface ILocale {
  getLocale(): Lang
  filterLocale(locale: string): Lang
  setLocale(lang: Lang): void
}
