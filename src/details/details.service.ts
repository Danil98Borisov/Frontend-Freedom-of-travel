import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Router} from "@angular/router";
import {tap} from "rxjs/operators";
import {ApartmentDetails} from "../models/apartmentDetails";
import {AppApiConst} from "../app/app.api.const";

@Injectable()
export class DetailsService {

  constructor(private http: HttpClient){}

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

   getDetailsApartmentPage(id: number): Observable<ApartmentDetails> {
    const url = `${AppApiConst.APARTMENT_DETAILS}/${id}`;

    return this.http.get<ApartmentDetails>(url, this.httpOptions).pipe(
      tap(details => {
        console.log("Детально : ", details);
      }, error => {
        console.log('error: ', error);
      })
    );
  }
}
