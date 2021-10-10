import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';


import {Observable} from 'rxjs';
import {Reservation} from '../models/reservation';
import {AppApiConst} from "../../app.api.const";
import {tap} from "rxjs/operators";

@Injectable()
export class UserBookingService {
  constructor(private http: HttpClient) {
  }

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  getAllReservationUser(email: string): Observable<Reservation[]> {

    return this.http.get<Reservation[]>(AppApiConst.BOOKING +"/" + `${email}`).pipe(
      tap(Booking => {
        console.log("Детально Booking: ", Booking);
      }, error => {
        console.log('error: ', error);
      })
    );
  }

  deleteReservation(reservation: Reservation){
    return this.http.post<Reservation>(AppApiConst.RESERVATION_EDIT, reservation)
      .subscribe(reservation => {
        console.log("Reservation delete: ", reservation);
      }, error => {
        console.log('error: ', error);
      });
  }

}
