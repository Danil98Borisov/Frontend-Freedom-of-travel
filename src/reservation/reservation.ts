export class Reservation {
  constructor(
    public id: number,
    public hotel_id: string,
    public apartment_id: string,
    public status: string,
    public start_date: string,
    public end_date: string
  ) {}
}
