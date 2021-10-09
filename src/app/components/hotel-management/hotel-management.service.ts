import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';


import {Observable} from 'rxjs';
import {AppApiConst} from "../../app.api.const";
import {tap} from "rxjs/operators";
import {Hotel} from "../models/hotel";

@Injectable()
export class HotelManagementService {
  constructor(private http: HttpClient) {
  }

  getAllReservationUser(email: string): Observable<Hotel[]> {

    return this.http.get<Hotel[]>(AppApiConst.HOTEL_MANAGEMENT +"/" + `${email}`).pipe(
      tap(Booking => {
        console.log("Детально HotelManagement: ", Booking);
      }, error => {
        console.log('error: ', error);
      })
    );
  }

}
