import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Router} from "@angular/router";
import {tap} from "rxjs/operators";
import {HotelDetails} from "../models/hotelDetails";
import {AppApiConst} from "../../app.api.const";

@Injectable()
export class DetailsHotelService {

  constructor(
    private router:Router,
    private http: HttpClient
  ){}

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

   getDetailsHotelPage(id: number): Observable<HotelDetails> {
    return this.http.get<HotelDetails>(`${AppApiConst.HOTEL_DETAILS}/${id}`, this.httpOptions).pipe(
      tap(hotelDetails => {
        console.log("Детально : ", hotelDetails);
      }, error => {
        console.log('error: ', error);
      })
    );
  }
}
