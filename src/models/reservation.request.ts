export class ReservationRequest {
  constructor(
    public apartmentId?: number,
    public bookingBy?: string,
    public start_date?: string,
    public end_date?: string
  ) {
  }
}
