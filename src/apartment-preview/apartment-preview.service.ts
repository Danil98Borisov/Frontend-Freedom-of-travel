import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {AppConstComponent} from "../app/app-const.component";
import {Router} from "@angular/router";
import {tap} from "rxjs/operators";
import {ApartmentPreview} from "../models/apartmentPreview";
import {Apartment} from "../models/apartment";

@Injectable()
export class ApartmentPreviewService {

  constructor(
    private router:Router, //instanciate a router
    private http: HttpClient
  ){}


  detailFlagUrl=AppConstComponent.API_ENDPOINT +"apartmentPreview/details/preview"


/*  getApartmentPreviewPage(): Observable<ApartmentPreview[]> {
    const url = `${this.detailFlagUrl}/${id}`;
    console.log("ID: ", id)
    return this.http.get<ApartmentPreview[]>(url, this.httpOptions).pipe(
      tap(apartmentPreview => {
        console.log("Детально : ", apartmentPreview);
      }, error => {
        console.log('error: ', error);
      })
    );
  }*/

  public getApartmentPreviewPage(): Observable<ApartmentPreview[]> {
    console.log("getApartmentPreviewPage invoked");
    return this.http.get<ApartmentPreview[]>(this.detailFlagUrl);
  }
}
