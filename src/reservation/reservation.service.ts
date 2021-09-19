import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';


import {Observable} from 'rxjs';
import {Reservation} from '../models/reservation';
import {AppConstComponent} from "../app/app-const.component";

@Injectable()
export class ReservationService {
  constructor(private http: HttpClient) {
  }

  reservationUrlAll = AppConstComponent.API_ENDPOINT + 'reservation/all';

  public getAllReservationPage(): Observable<Reservation[]> {
    console.log("getAllReservationPage invoked");
    return this.http.get<Reservation[]>(this.reservationUrlAll);
  }

}
