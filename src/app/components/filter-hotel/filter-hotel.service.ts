import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';


import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import {HotelPreview} from "../models/hotelPreview";
import {AppApiConst} from "../../app.api.const";


@Injectable()
export class FilterHotelService {
  constructor(private http: HttpClient) {
  }

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  public getAllHotelPreviewPage(): Observable<HotelPreview[]> {
    console.log("getAllHotelPage invoked");
    return this.http.get<HotelPreview[]>(AppApiConst.HOTEL_PREVIEW_DETAILS);
  }

  public getFilterHotelPreviewPage(url: string): Observable<HotelPreview[]> {
    console.log("getFilterHotelPage invoked");
    return this.http.get<HotelPreview[]>(url);
  }

  filterHotel(price: number, type: string, startDate: any, endDate: any, city: string, rating: number, sort: string, page: number): Observable<HotelPreview[]> {

    let url = `${AppApiConst.HOTEL_PREVIEW_FIND}`;
    if (price != null || type != null || city != null || rating != null || startDate != null || endDate != null ) {
      url += '?';
      if (startDate != null) {
        url += `&startDate=${startDate}`;
      }
      if (endDate != null) {
        url += `&endDate=${endDate}`;
      }
      if (price != null) {
        url += `&price=${price}`;
      }
      if (type != null) {
        url += `&type=${type}`;
      }
      if (city != null) {
        url += `&city=${city}`;
      }
      if (rating != null) {
        url += `&rating=${rating}`;
      }
      if (page != null) {
        url += `&page=${page}`;
      }
      if (sort != null) {
        url += `&sort=${sort}`;
      }
    }
    else{
      url +='?'+`startDate=2021-01-01`+`&endDate=2021-02-01`+`&sort=${sort}`+`&page=${page}`;
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
