import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


import {Observable, of, throwError} from 'rxjs';
import {catchError, map, retry} from 'rxjs/operators';
import { Reservation } from './reservation';

@Injectable()
export class ReservationService {
  constructor(private http: HttpClient) {
  }
  /*добавить слово api в URL*/
  reservationUrlAll = 'http://localhost:8050/reservation';

  public getAllReservationPage(): Observable<Reservation[]> {
    console.log("getAllReservationPage invoked");
    return this.http.get<Reservation[]>(this.reservationUrlAll);
  }

}
