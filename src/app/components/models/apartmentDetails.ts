import {Apartment} from "./apartment";
import {ApartmentImage} from "./apartmentImage";

export class ApartmentDetails {
  constructor(
    public apartment?: Apartment,
    public apartmentImages?: ApartmentImage[]
  ) {
  }
}
