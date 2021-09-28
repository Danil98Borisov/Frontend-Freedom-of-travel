import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';


import {Observable} from 'rxjs';
import {Reservation} from '../models/reservation';
import {AppApiConst} from "../app/app.api.const";
import {tap} from "rxjs/operators";

@Injectable()
export class UserBookingService {
  constructor(private http: HttpClient) {
  }

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  getAllReservationUser(email: string): Observable<Reservation[]> {
    const url = `${AppApiConst.USER_BOOKING}/${email}`;

    return this.http.get<Reservation[]>(url, this.httpOptions).pipe(
      tap(userBooking => {
        console.log("Детально userBooking: ", userBooking);
      }, error => {
        console.log('error: ', error);
      })
    );
  }

}
