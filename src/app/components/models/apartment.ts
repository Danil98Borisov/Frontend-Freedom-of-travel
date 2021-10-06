import {Hotel} from "./hotel";
import {Type} from "./type";

export class Apartment {
  constructor(
    public id: number,
    public hotel: Hotel,
    public type: Type,
    public price: number,
    public description: string
  ) {
  }
}
