import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Apartment} from "../models/apartment";
import {AppApiConst} from "../../app.api.const";

@Injectable()
export class ApartmentService {

  constructor(private http: HttpClient) {
  }

  public getAllApartmentPage(): Observable<Apartment[]> {
    console.log("getAllApartmentPage invoked");
    return this.http.get<Apartment[]>(AppApiConst.APARTMENT_ALL);
  }

}
