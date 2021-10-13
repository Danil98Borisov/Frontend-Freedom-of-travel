import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';


import {Observable} from 'rxjs';
import {AppApiConst} from "../../app.api.const";
import {tap} from "rxjs/operators";
import {Hotel} from "../models/hotel";
import {User} from "../models/user";

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

  public getAllHotelsPaginated(pageNum: number, pageSize: number): Observable<Hotel[]> {
    console.log("getAllHotelPage invoked");
    return this.http.get<Hotel[]>(AppApiConst.HOTEL_ALL_PAGINATED + '?pageNumber=' + pageNum + '&pageSize=' + pageSize);
  }

}
