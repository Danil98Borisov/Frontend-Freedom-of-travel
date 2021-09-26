import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';


import {Observable} from 'rxjs';
import {Hotel} from "../models/hotel";
import {AppApiConst} from "../app/app.api.const";


@Injectable()
export class HotelService {
  constructor(private http: HttpClient) {
  }

  public getAllHotelPage(): Observable<Hotel[]> {
    console.log("getAllHotelPage invoked");
    return this.http.get<Hotel[]>(AppApiConst.HOTEL_ALL);
  }

}
