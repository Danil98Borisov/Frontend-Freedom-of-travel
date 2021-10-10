import {Hotel} from "./hotel";
import {User} from "./user";

export class ManagerHotel {
  constructor(
    public hotel?: Hotel,
    public managedByUser?: User,
  ) {
  }
}
