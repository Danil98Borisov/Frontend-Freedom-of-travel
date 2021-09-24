import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {AppConstComponent} from "../app/app-const.component";
import {Router} from "@angular/router";
import {HotelPreview} from "../models/hotelPreview";

@Injectable()
export class HotelPreviewService {

  constructor(
    private router:Router,
    private http: HttpClient
  ){}


  detailFlagUrl=AppConstComponent.API_ENDPOINT +"hotelPreview/details/preview"

  public getHotelPreviewPage(): Observable<HotelPreview[]> {
    console.log("getHotelPreviewPage invoked");
    return this.http.get<HotelPreview[]>(this.detailFlagUrl);
  }
}
