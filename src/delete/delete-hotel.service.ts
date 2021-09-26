import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';


import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import {Hotel} from "./hotel";
import {AppApiConst} from "../app/app.api.const";


@Injectable()
export class DeleteHotelService {
  constructor(private http: HttpClient) {
  }

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  public getAllHotelPage(): Observable<Hotel[]> {
    console.log("getAllHotelPage invoked");
    return this.http.get<Hotel[]>(AppApiConst.HOTEL_ALL);
  }

  deleteHotel(id: number): Observable<Hotel> {
    const url = `${AppApiConst.HOTEL_DELETE}/${id}`;

    return this.http.delete<Hotel>(url, this.httpOptions).pipe(
      tap(hotel => {
        console.log("Отель удалён: ", hotel);
      }, error => {
        console.log('error: ', error);
      })
    );
  }

}
