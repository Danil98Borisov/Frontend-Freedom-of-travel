import {Hotel} from "./hotel";
import {HotelImage} from "./hotelImage";

export class HotelDetails {
  constructor(
    public hotel?: Hotel,
    public hotelImages?: HotelImage[],
    public editAllowed?: boolean
  ) {
  }
}
