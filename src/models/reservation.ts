import {Apartment} from "./apartment";
import {Hotel} from "./hotel";
import {User} from "./user";

export class Reservation {
  constructor(
    public id?: number,
    public hotel?: Hotel,
    public apartment?: Apartment,
    public status?: string,
    public start_date?: string,
    public end_date?: string,
    public user?: User
  ) {
  }
}
