import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';


import {Observable} from 'rxjs';
import {Hotel} from "../models/hotel";
import {AppConstComponent} from "../app/app-const.component";


@Injectable()
export class HotelService {
  constructor(private http: HttpClient) {
  }

  hotelUrlAll = AppConstComponent.API_ENDPOINT + 'hotel/all';

  public getAllHotelPage(): Observable<Hotel[]> {
    console.log("getAllHotelPage invoked");
    return this.http.get<Hotel[]>(this.hotelUrlAll);
  }

}
