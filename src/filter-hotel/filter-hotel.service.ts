import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';


import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import {AppApiConst} from "../app/app.api.const";
import {HotelPreview} from "../models/hotelPreview";


@Injectable()
export class FilterHotelService {
  constructor(private http: HttpClient) {
  }

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };



  public getAllHotelPreviewPage(): Observable<HotelPreview[]> {
    console.log("getAllHotelPage invoked");
    return this.http.get<HotelPreview[]>(AppApiConst.APARTMENT_PREVIEW_FIND);
  }


  public getFilterHotelPreviewPage(url: string): Observable<HotelPreview[]> {
    console.log("getFilterHotelPage invoked");
    return this.http.get<HotelPreview[]>(url);
  }

  filterHotel(city: string, rating: number, page: number): Observable<HotelPreview[]> {

    let url = `${AppApiConst.HOTEL_PREVIEW_FIND}`;
    if (city != null || rating != null) {
      url += '?';
      if (city != null) {
        url += `&city=${city}`;
      }
      if (rating != null) {
        url += `&rating=${rating}`;
      }
      if (page != null) {
        url += `&page=${page}`;
      }
    }
    else {
      url += '?'+ `page=${page}`;
    }
    return this.http.get<HotelPreview[]>(url, this.httpOptions).pipe(
      tap(hotelPreview => {
        console.log(url);
        this.getFilterHotelPreviewPage(url);
      }, error => {
        console.log('error: ', error);
      })
    );
  }
}
