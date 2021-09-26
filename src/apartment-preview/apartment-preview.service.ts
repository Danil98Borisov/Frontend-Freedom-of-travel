import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Router} from "@angular/router";
import {ApartmentPreview} from "../models/apartmentPreview";
import {AppApiConst} from "../app/app.api.const";

@Injectable()
export class ApartmentPreviewService {

  constructor(
    private router:Router, //instanciate a router
    private http: HttpClient
  ){}

  public getApartmentPreviewPage(): Observable<ApartmentPreview[]> {
    console.log("getApartmentPreviewPage invoked");
    return this.http.get<ApartmentPreview[]>(AppApiConst.APARTMENT_PREVIEW_DETAILS);
  }
}
