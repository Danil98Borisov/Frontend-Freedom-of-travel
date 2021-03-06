import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Router} from "@angular/router";
import {tap} from "rxjs/operators";
import {ApartmentDetails} from "../models/apartmentDetails";
import {AppApiConst} from "../../app.api.const";
import {ReservationResponse} from "../models/reservation.response";
import {Reservation} from "../models/reservation";

@Injectable()
export class DetailsService {

  constructor(private http: HttpClient){}

   httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  getOccupiedApartment(reservationResponse: ReservationResponse): Observable<any> {
    return this.http.post(AppApiConst.RESERVATION_ADD, reservationResponse,this.httpOptions);
  }
  public sendEmailToReservation(email: string): Observable<Reservation[]> {
    const url = `${AppApiConst.EMAIL_TO_RESERVATION}?email=${email}`
    return this.http.get<Reservation[]>(url);
  }

  getDetailsApartmentPage(id: number): Observable<ApartmentDetails> {
    return this.http.get<ApartmentDetails>(`${AppApiConst.APARTMENT_DETAILS}/${id}`, this.httpOptions).pipe(
      tap(details => {
        console.log("Детально : ", details);
      }, error => {
        console.log('error: ', error);
      })
    );
  }
}
