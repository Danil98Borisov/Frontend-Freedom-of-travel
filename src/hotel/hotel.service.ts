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
  }

}
