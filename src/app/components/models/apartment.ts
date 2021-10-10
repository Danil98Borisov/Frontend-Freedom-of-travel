import {Hotel} from "./hotel";
import {ApartmentType} from "./apartmentType";

export class Apartment {
  constructor(
    public id: number,
    public hotel: Hotel,
    public type: ApartmentType,
    public price: number,
    public description: string
  ) {
  }
}
