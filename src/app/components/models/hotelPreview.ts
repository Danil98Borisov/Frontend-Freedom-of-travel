import {Hotel} from "./hotel";
import {HotelImage} from "./hotelImage";

export class HotelPreview {
  constructor(
    public hotel: Hotel,
    public imageHotel: HotelImage
  ) {
  }
}
