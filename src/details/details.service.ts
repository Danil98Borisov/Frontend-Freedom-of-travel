import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {AppConstComponent} from "../app/app-const.component";
import {Router} from "@angular/router";
import {Apartment} from "../apartment/apartment";
import {tap} from "rxjs/operators";

@Injectable()
export class DetailsService {

  constructor(
    private router:Router, //instanciate a router
    private http: HttpClient
  ){}

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  detailUrl=AppConstComponent.API_ENDPOINT +"apartment/details"



  getDetailsApartmentPage(id: number): Observable<Apartment[]> {
    const url = `${this.detailUrl}/${id}`;

    return this.http.get<Apartment[]>(url, this.httpOptions).pipe(
      tap(apartment => {
        console.log("Детально : ", apartment);
      }, error => {
        console.log('error: ', error);
      })
    );
  }




  /*
  public detailsApartment(): any {
    console.log("getAllApartmentPage invoked");
  }
  public getDetailsApartmentPage(): Observable<Apartment[]> {
    console.log("getAllApartmentPage invoked");
    return this.http.get<Apartment[]>(this.detailUrl);
  }*/
}
