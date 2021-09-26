import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';


import {Observable} from 'rxjs';
import {Reservation} from '../models/reservation';
import {AppApiConst} from "../app/app.api.const";

@Injectable()
export class ReservationService {
  constructor(private http: HttpClient) {
  }

  public getAllReservationPage(): Observable<Reservation[]> {
    console.log("getAllReservationPage invoked");
    return this.http.get<Reservation[]>(AppApiConst.RESERVATION_ALL);
  }

}
