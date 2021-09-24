import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';


import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import {AppConstComponent} from "../app/app-const.component";
import {HotelPreview} from "../models/hotelPreview";


@Injectable()
export class FilterHotelService {
  constructor(private http: HttpClient) {
  }

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  detailHotelFlagUrl=AppConstComponent.API_ENDPOINT +"hotelPreview/details/preview"
  filterHotelPreviewUrlAll = AppConstComponent.API_ENDPOINT + 'hotelPreview/find/preview';


  public getAllHotelPreviewPage(): Observable<HotelPreview[]> {
    console.log("getAllHotelPage invoked");
    return this.http.get<HotelPreview[]>(this.detailHotelFlagUrl);
  }


  public getFilterHotelPreviewPage(url: string): Observable<HotelPreview[]> {
    console.log("getFilterHotelPage invoked");
    return this.http.get<HotelPreview[]>(url);
  }

  filterHotel(city: string, rating: number): Observable<HotelPreview[]> {

    let url = `${this.filterHotelPreviewUrlAll}`;
    if (city != null || rating != null ) {
      url += '?';
      if (city != null) {
        url += `&city=${city}`;
      }
      if (rating != null) {
        url += `&rating=${rating}`;
      }
    }
    else{
      url = this.detailHotelFlagUrl;
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
