interface ITicketData{
  clientName: string,
  clientSurname: string,
  filmName: string,
  filmHour: string,
  dateOfFilm: string | Date,
  seatNumber: string,
  cinemaHall: string,
  QR_CODE_IMG: string,
}

export default ITicketData
