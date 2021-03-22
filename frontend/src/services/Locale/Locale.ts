import { Lang } from "../../common/types/Lang"
import { IStorage } from "../Storage/IStorage"
import { ILocale } from "./ILocale"

export default class LocaleService implements ILocale {
  storageService: IStorage
  supportedLanguages: Array<string>

  constructor(storageService: IStorage, supportedLanguages: Array<string>) {
    this.storageService = storageService
    this.supportedLanguages = supportedLanguages
  }

  getLocale() {
    const locale =
      (navigator.languages && navigator.languages[0]) ||
      navigator.language ||
      "en"
    return this.filterLocale(locale)
  }

  filterLocale(locale: string) {
    if (this.supportedLanguages) {
      const fallbackLanguage = this.supportedLanguages[0]
        ? this.supportedLanguages[0]
        : "en"
      return this.supportedLanguages.indexOf(locale) > -1
        ? (locale as Lang)
        : (fallbackLanguage as Lang)
    } else {
      return locale as Lang
    }
  }

  setLocale(lang: Lang) {
    this.storageService.setItem("lang", lang)
  }
}
