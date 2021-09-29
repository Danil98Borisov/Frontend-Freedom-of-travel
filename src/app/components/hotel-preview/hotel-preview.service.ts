import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Router} from "@angular/router";
import {HotelPreview} from "../models/hotelPreview";
import {AppApiConst} from "../../app.api.const";

@Injectable()
export class HotelPreviewService {

  constructor(
    private router:Router,
    private http: HttpClient
  ){}

  public getHotelPreviewPage(): Observable<HotelPreview[]> {
    console.log("getHotelPreviewPage invoked");
    return this.http.get<HotelPreview[]>(AppApiConst.HOTEL_PREVIEW_DETAILS);
  }
}
