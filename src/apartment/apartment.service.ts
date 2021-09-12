import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Apartment} from "./apartment";
import {AppConstComponent} from "../app/app-const.component";

@Injectable()
export class ApartmentService {

  apartmentUrlAll = AppConstComponent.API_ENDPOINT + 'apartment/all';

  constructor(private http: HttpClient) {
  }

  public getAllApartmentPage(): Observable<Apartment[]> {
    console.log("getAllApartmentPage invoked");
    return this.http.get<Apartment[]>(this.apartmentUrlAll);
  }

}
