import {Hotel} from "./hotel";

export class Apartment {
  constructor(
    public id: number,
    public hotel: Hotel,
    public type: string,
    public price: number,
    public description: string
  ) {
  }
}
