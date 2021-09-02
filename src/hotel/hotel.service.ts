import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import {Observable, of, throwError} from 'rxjs';
import {catchError, map, retry} from 'rxjs/operators';
import {Hotel} from "./hotel";

@Injectable()
export class HotelService {
  constructor(private http: HttpClient) {
  }
  /*добавить слово api в URL*/
  hotelUrlAll = 'http://localhost:8050/hotel';

  public getAllHotelPage(): Observable<Hotel[]> {
    console.log("getAllHotelPage invoked");
    return this.http.get<Hotel[]>(this.hotelUrlAll);
    /*.pipe(map((data: any) =>{
      let hotelList = data[""];
      return hotelList.map(function (hotel: any): Hotel{
        return new Hotel(hotel.id,hotel.hotelName, hotel.city,hotel.rating)
     })*/
    //return this.http.get<Hotel[]>(this.hotelUrlAll).pipe(id =>id, hotelName =>hotelName, city => city, rating => rating)
    //return this.http.get<Hotel[]>(this.hotelUrlAll).pipe(map((response: any) => response.json()));
  }

}
