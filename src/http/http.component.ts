import { Component} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs/internal/Observable';
import { Hotel } from 'src/hotel/hotel';
import { HttpService} from './http.service';
import {HttpClient, HttpParams} from "@angular/common/http";

@Component({
  selector: 'app-http',
  styleUrls:['http.component.css'],
  templateUrl: 'http.component.html',
  providers: [HttpService]
})
export class HttpComponent {
  hotels: Hotel[] = [];
  constructor(private http: HttpClient) {
  }

  hotelUrlAdd = 'http://localhost:8050/hotel/add';
  public addHotel(hotel: Hotel) {
    console.log(JSON.stringify(hotel));
    console.log(this.hotelUrlAdd);

    return this.http.put<Hotel>(this.hotelUrlAdd, hotel)
      .subscribe(hotel => {
        console.log("Отель добалвен: ", hotel);
      }, error => {
        console.log('error: ', error);
      });
 }
   onSubmit(form: NgForm){
      console.log(JSON.stringify(form.value));
      return this.addHotel(form.value)
    }


/*
  hotelUrlAdd = 'http://localhost:8050/hotel/add';
  public addHotel(form: NgForm): Observable<Hotel[]> {
    //return this.http.put<Hotel[]>(this.hotelUrlAdd, {id: hotels.id ,hotelsName: hotels.hotelName,city: hotels.city,rating: hotels.rating});
    return this.http.put<Hotel[]>(this.hotelUrlAdd, JSON.stringify(form.value));
    console.log("Отправил на сервер")
  }*/
}
