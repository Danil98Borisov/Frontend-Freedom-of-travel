import { Component} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs/internal/Observable';
import { Hotel } from 'src/hotel/hotel';
import { HttpService} from './http.service';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-http',
  styleUrls:['http.component.css'],
  templateUrl: 'http.component.html',
  providers: [HttpService]
})
export class HttpComponent {
  hotels: Hotel[]=[];
  constructor(private http: HttpClient) {
  }
  id: string ="1"
  hotelName: string = "";
  city: string = "";
  rating: string = "";

  hotelUrlAdd = 'http://localhost:8050/hotel/add';
  public addHotel(hotels: Hotel): Observable<Hotel> {
    console.log("Отправил на сервер")
    console.log(JSON.stringify(hotels));
    console.log(JSON.stringify(this.hotelUrlAdd));
    return this.http.put<Hotel>(this.hotelUrlAdd, JSON.stringify(hotels));

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
