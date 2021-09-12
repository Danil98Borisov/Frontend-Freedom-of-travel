import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Apartment} from "./apartment";

@Injectable()
export class ApartmentService {

  apartmentUrlAll = 'http://localhost:8050/api/apartment/all';

  constructor(private http: HttpClient) {
  }

  public getAllApartmentPage(): Observable<Apartment[]> {
    console.log("getAllApartmentPage invoked");
    return this.http.get<Apartment[]>(this.apartmentUrlAll);
  }

}
