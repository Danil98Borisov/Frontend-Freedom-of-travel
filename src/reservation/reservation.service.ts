import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


import {Observable, of, throwError} from 'rxjs';
import {catchError, map, retry} from 'rxjs/operators';
import { Reservation } from './reservation';
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
