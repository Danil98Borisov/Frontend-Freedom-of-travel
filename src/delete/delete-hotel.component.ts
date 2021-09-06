/*import { Component} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs/internal/Observable';
import { Hotel } from 'src/hotel/hotel';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-http',
  styleUrls:['http.component.css'],
  templateUrl: 'http.component.html',
})
export class DeleteHotelComponent {
  constructor(private http: HttpClient) {
  }

  id: string = "1"
  hotelName: string = "";
  city: string = "";
  rating: string = "";

  hotelUrlAdd = 'http://localhost:8050/hotel/add';

  public addHotel(hotels: Hotel): Observable<Hotel> {
    //return this.http.put<Hotel[]>(this.hotelUrlAdd, {id: hotels.id ,hotelsName: hotels.hotelName,city: hotels.city,rating: hotels.rating});
    console.log("Отправил на сервер")
    console.log(JSON.stringify(hotels));
    console.log(JSON.stringify(this.hotelUrlAdd));
    return this.http.put<Hotel>(this.hotelUrlAdd, JSON.stringify(hotels));

  }
}*/
