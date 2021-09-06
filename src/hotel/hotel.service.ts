import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


import {Observable, of, throwError} from 'rxjs';
import {catchError, map, retry, tap} from 'rxjs/operators';
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
  }
/*
  hotelUrlAdd = 'http://localhost:8050/hotel/add';
  public addHotel(hotels: Hotel): Observable<Hotel[]> {
    //return this.http.put<Hotel[]>(this.hotelUrlAdd, {id: hotels.id ,hotelsName: hotels.hotelName,city: hotels.city,rating: hotels.rating});
    return this.http.put<Hotel[]>(this.hotelUrlAdd, JSON.stringify(hotels));
  }*/

}
