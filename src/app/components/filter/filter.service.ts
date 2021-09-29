import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';


import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import {ApartmentPreview} from "../models/apartmentPreview";
import {AppApiConst} from "../../app.api.const";


@Injectable()
export class FilterService {
  constructor(private http: HttpClient) {
  }

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  public getAllApartmentPreviewPage(): Observable<ApartmentPreview[]> {
    console.log("getAllApartmentPage invoked");
    return this.http.get<ApartmentPreview[]>(AppApiConst.APARTMENT_PREVIEW_DETAILS);
  }


  public getFilterApartmentPreviewPage(url: string): Observable<ApartmentPreview[]> {
    console.log("getFilterApartmentPage invoked");
    return this.http.get<ApartmentPreview[]>(url);
  }

  filterApartment(price: number, type: string, startDate: any, endDate: any, city: string, rating: number, page: number): Observable<ApartmentPreview[]> {

    let url = `${AppApiConst.APARTMENT_PREVIEW_FIND}`;
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
    }
    else{
      url +='?'+`startDate=1970-01-01`+`&endDate=1970-02-01`+`&page=${page}`;
    }

    return this.http.get<ApartmentPreview[]>(url, this.httpOptions).pipe(
      tap(apartmentPreview => {
        console.log(url);
        this.getFilterApartmentPreviewPage(url);
      }, error => {
        if(price == null){
          console.log("Введите price");
        }
        console.log('error: ', error);
      })
    );
  }
}
