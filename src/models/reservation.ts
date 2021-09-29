import {Apartment} from "./apartment";
import {Hotel} from "./hotel";

export class Reservation {
  constructor(
    public id?: number,
    public hotel?: Hotel,
    public apartment?: Apartment,
    public status?: string,
    public start_date?: string,
    public end_date?: string,
  ) {
  }
}
