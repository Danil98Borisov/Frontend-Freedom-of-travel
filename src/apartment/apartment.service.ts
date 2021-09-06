import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


import {Observable, of, throwError} from 'rxjs';
import {catchError, map, retry} from 'rxjs/operators';
import {Apartment} from "./apartment";

@Injectable()
export class ApartmentService {
  constructor(private http: HttpClient) {
  }
  /*добавить слово api в URL*/
  apartmentUrlAll = 'http://localhost:8050/apartment/all';

  public getAllApartmentPage(): Observable<Apartment[]> {
    console.log("getAllApartmentPage invoked");
    return this.http.get<Apartment[]>(this.apartmentUrlAll);
  }

}
