export const MAIN_ROUTE = "/main"

export const RouteBuilder = {
  toIndex: (): string => "/",
  toMain: (): string => MAIN_ROUTE,
  toLogin: (): string => "/login",
  toRegister: (): string => "/register",
  toSeatsReservation: (movieId: string): string =>
    "/seatsReservation" + movieId,
  toMovie: (): string => "/movie"
}
