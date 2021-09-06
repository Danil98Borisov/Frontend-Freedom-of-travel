import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Hotel } from 'src/hotel/hotel';
import { Observable } from 'rxjs/internal/Observable';


@Injectable()
export class HttpService {

  constructor(private http: HttpClient) {
  }
/*
  postData(hotel: Hotel) {
    const body = {id: hotel.id, hotelName: hotel.hotelName, city: hotel.city, rating: hotel.rating};
    return this.http.post('http://localhost:8050/hotel/edit', body);
  }

  hotelUrlAdd = 'http://localhost:8050/hotel/add';
  public addHotel(hotels: Hotel): Observable<Hotel[]> {
    //return this.http.put<Hotel[]>(this.hotelUrlAdd, {id: hotels.id ,hotelsName: hotels.hotelName,city: hotels.city,rating: hotels.rating});
    return this.http.put<Hotel[]>(this.hotelUrlAdd, JSON.stringify());
  }*/
}
