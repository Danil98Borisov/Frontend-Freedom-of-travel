export class ReservationResponse {
  constructor(
    public startDate?: string,
    public endDate?: string,
    public apartmentId?: number,
    public bookingBy?: string,
    public status?: boolean,
    public message?: string

  ) {
  }
}
