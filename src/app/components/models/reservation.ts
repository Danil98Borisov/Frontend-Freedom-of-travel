import {Apartment} from "./apartment";
import {Hotel} from "./hotel";

export class Reservation {
  constructor(
    public id?: number,
    public hotel?: Hotel,
    public apartment?: Apartment,
    public status?: string,
    public startDate?: string,
    public endDate?: string,
    public reservationDate?: string,
    public modifiedWhen?: string,
    public modifiedBy?: string,
  ) {
  }
}
