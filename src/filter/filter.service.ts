import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';


import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import { Apartment } from 'src/apartment/apartment';


@Injectable()
export class FilterService {
  constructor(private http: HttpClient) {
  }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  apartmentUrlAll = 'http://localhost:8050/api/apartment/all';
  filterApartmentUrlAll = 'http://localhost:8050/api/apartment/find';



  public getAllApartmentPage(): Observable<Apartment[]> {
    console.log("getAllApartmentPage invoked");
    return this.http.get<Apartment[]>(this.apartmentUrlAll);
  }




  public getFilterApartmentPage(url:string): Observable<Apartment[]> {
    console.log("getFilterApartmentPage invoked");
    return this.http.get<Apartment[]>(url);
  }

  filterApartment(price: number, type: string, startDate: any, endDate: any, city: string, rating: number): Observable<Apartment[]> {
    const url = `${this.filterApartmentUrlAll}?startDate=${startDate}&endDate=${endDate}&price=${price}&apartmentType=${type}&city=${city}&rating=${rating}`;

    return this.http.get<Apartment[]>(url, this.httpOptions).pipe(
      tap(apartment => {
        console.log(url);
        this.getFilterApartmentPage(url);
      }, error => {
        console.log('error: ', error);
      })
    );
  }
}
