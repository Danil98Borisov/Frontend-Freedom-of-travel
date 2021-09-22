import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {AppConstComponent} from "../app/app-const.component";
import {Router} from "@angular/router";
import {tap} from "rxjs/operators";
import {ApartmentDetails} from "../models/apartmentDetails";

@Injectable()
export class DetailsService {

  constructor(
    private router:Router,
    private http: HttpClient
  ){}

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  detailUrl=AppConstComponent.API_ENDPOINT +"apartment/details"


   getDetailsApartmentPage(id: number): Observable<ApartmentDetails> {
    const url = `${this.detailUrl}/${id}`;

    return this.http.get<ApartmentDetails>(url, this.httpOptions).pipe(
      tap(details => {
        console.log("Детально : ", details);
      }, error => {
        console.log('error: ', error);
      })
    );
  }
}
