import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';


import {Observable} from 'rxjs';
import {publish, tap} from 'rxjs/operators';
import {Apartment} from 'src/models/apartment';
import {AppConstComponent} from "../app/app-const.component";
import {toPublicName} from "@angular/compiler/src/i18n/serializers/xmb";
import {ApartmentPreview} from "../models/apartmentPreview";


@Injectable()
export class FilterService {
  constructor(private http: HttpClient) {
  }

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  apartmentUrlAll = AppConstComponent.API_ENDPOINT + 'apartment/all';
  filterApartmentUrlAll = AppConstComponent.API_ENDPOINT + 'apartment/find';
  detailFlagUrl=AppConstComponent.API_ENDPOINT +"apartmentPreview/details/preview"
  filterApartmentPreviewUrlAll = AppConstComponent.API_ENDPOINT + 'apartmentPreview/find/preview';


  public getAllApartmentPreviewPage(): Observable<ApartmentPreview[]> {
    console.log("getAllApartmentPage invoked");
    return this.http.get<ApartmentPreview[]>(this.detailFlagUrl);
  }


  public getFilterApartmentPreviewPage(url: string): Observable<ApartmentPreview[]> {
    console.log("getFilterApartmentPage invoked");
    return this.http.get<ApartmentPreview[]>(url);
  }

  filterApartment(price: number, type: string, startDate: any, endDate: any, city: string, rating: number): Observable<ApartmentPreview[]> {

    let url = `${this.filterApartmentPreviewUrlAll}`;
    if (price != null || type != null || city != null || rating != null || startDate != null || endDate != null) {
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
    }
    else{
      url = this.detailFlagUrl;
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
