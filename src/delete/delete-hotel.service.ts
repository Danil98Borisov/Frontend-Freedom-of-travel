import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


import {Observable, of, throwError} from 'rxjs';
import {catchError, map, retry, tap} from 'rxjs/operators';
import { Hotel } from 'src/hotel/hotel';

@Injectable()
export class DeleteHotelService {
  constructor(private http: HttpClient) {
  }

  /*добавить слово api в URL*/
  deleteHotelUrlAll = 'http://localhost:8050/delete/{id}';

/*  public getAllHotelPage(): Observable<Hotel[]> {
    console.log("getAllHotelPage invoked");
    return this.http.get<Hotel[]>(this.hotelUrlAll);
  }*/

  deleteHotel(id: number): Observable<Hotel[]>{
    console.log(this.deleteHotelUrlAll + id);
    return this.http.delete<Hotel[]>(this.deleteHotelUrlAll + id);
  }

  /*
    hotelUrlAdd = 'http://localhost:8050/hotel/add';
    public addHotel(hotels: Hotel): Observable<Hotel[]> {
      //return this.http.put<Hotel[]>(this.hotelUrlAdd, {id: hotels.id ,hotelsName: hotels.hotelName,city: hotels.city,rating: hotels.rating});
      return this.http.put<Hotel[]>(this.hotelUrlAdd, JSON.stringify(hotels));
    }*/

}



