import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';


import {Observable} from 'rxjs';
import {publish, tap} from 'rxjs/operators';
import {Apartment} from 'src/apartment/apartment';
import {AppConstComponent} from "../app/app-const.component";
import {toPublicName} from "@angular/compiler/src/i18n/serializers/xmb";


@Injectable()
export class FilterService {
  constructor(private http: HttpClient) {
  }

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  apartmentUrlAll = AppConstComponent.API_ENDPOINT + 'apartment/all';
  filterApartmentUrlAll = AppConstComponent.API_ENDPOINT + 'apartment/find';


  public getAllApartmentPage(): Observable<Apartment[]> {
    console.log("getAllApartmentPage invoked");
    return this.http.get<Apartment[]>(this.apartmentUrlAll);
  }


  public getFilterApartmentPage(url: string): Observable<Apartment[]> {
    console.log("getFilterApartmentPage invoked");
    return this.http.get<Apartment[]>(url);
  }

  filterApartment(price: number, type: string, startDate: any, endDate: any, city: string, rating: number): Observable<Apartment[]> {
/*    if (price == null) {
      console.log("price=null")
      price = 1000000000;
    }
    if (startDate == null) {
      console.log("price=null")
      startDate = endDate;
    }
    if (endDate == null) {
      console.log("price=null")
      endDate = startDate;
    }
    if (rating == null) {
      console.log("price=null")
      rating = 0;
    }*/


   //const url = `${this.filterApartmentUrlAll}?startDate=${startDate}&endDate=${endDate}&price=${price}&apartmentType=${type}&city=${city}&rating=${rating}`;

    let url = `${this.filterApartmentUrlAll}`;
    // let url = this.filterApartmentUrlAll;
    if (price != null || type != null || city != null || rating != null || startDate != null || endDate != null) {
      url += '?';
      if (startDate != null) {
        url += `&startDate=${startDate}`;
      }
      if (endDate != null) {
        url += `&endDate=${endDate}`;
      }
      if (price != null) {
        url += `&price=${price}`;
      }
      if (type != null) {
        url += `&type=${type}`;
      }
      if (city != null) {
        url += `&city=${city}`;
      }
      if (rating != null) {
        url += `&rating=${rating}`;
      }
    }
    else{
      url =  this.apartmentUrlAll;
    }

    return this.http.get<Apartment[]>(url, this.httpOptions).pipe(
      tap(apartment => {
        console.log(url);
        this.getFilterApartmentPage(url);
      }, error => {
        if(price == null){
          console.log("Введите price");
        }
        console.log('error: ', error);
      })
    );
  }
}
