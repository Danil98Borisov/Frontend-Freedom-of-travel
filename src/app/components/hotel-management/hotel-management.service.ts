import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';


import {Observable} from 'rxjs';
import {AppApiConst} from "../../app.api.const";
import {tap} from "rxjs/operators";
import {Hotel} from "../models/hotel";

@Injectable()
export class HotelManagementService {
  constructor(private http: HttpClient) {
  }

  getHotelUser(email: string): Observable<Hotel[]> {

    return this.http.get<Hotel[]>(AppApiConst.HOTEL_MANAGEMENT + "/" + `${email}`).pipe(
      tap(Hotel => {
        console.log("Детально HotelManagement: ", Hotel);
      }, error => {
        console.log('error: ', error);
      })
    );
  }

  getAllHotelUser(): Observable<Hotel[]> {

    return this.http.get<Hotel[]>(AppApiConst.HOTEL_MANAGEMENT_ALL).pipe(
      tap(Hotel => {
        console.log("Детально AllHotelManagement: ", Hotel);
      }, error => {
        console.log('error: ', error);
      })
    );
  }

}
