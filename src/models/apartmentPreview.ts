import {Apartment} from "./apartment";
import {ApartmentImage} from "./apartmentImage";

export class ApartmentPreview {
  constructor(
    public apartment: Apartment,
    public imageApartment: ApartmentImage
  ) {
  }
}
