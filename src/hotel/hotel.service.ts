import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import {Hotel} from "./hotel";


@Injectable()
export class HotelService {
  constructor(private http: HttpClient) {
  }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  hotelUrlAll = 'http://localhost:8050/api/hotel/all';
  deleteHotelUrlAll = 'http://localhost:8050/api/hotel/delete';

  public getAllHotelPage(): Observable<Hotel[]> {
    console.log("getAllHotelPage invoked");
    return this.http.get<Hotel[]>(this.hotelUrlAll);
  }
  /** DELETE: hotel the hero from the server */
  deleteHotel(id: number): Observable<Hotel> {
    const url = `${this.deleteHotelUrlAll}/${id}`;

    return this.http.delete<Hotel>(url, this.httpOptions).pipe(
      tap(hotel => {
        console.log("Отель удалён: ", hotel);
      }, error => {
        console.log('error: ', error);
      })
    );
  }

}

