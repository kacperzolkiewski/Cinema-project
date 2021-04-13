export interface IFilmArticle {
  title: string
  imageUrl: string
  quantity: number
  onQuantityChange?: any
}

export interface IFilmSection {
  filmsCount: number
}

export interface IPaymentButton {
  total: number
  onQuantityChange?: any
}
