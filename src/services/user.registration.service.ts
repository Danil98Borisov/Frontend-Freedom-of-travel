import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {AppApiConst} from "../app/app.api.const";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UserRegistrationService {

  constructor(private http: HttpClient) { }

  register(user: { username: any; email: any; password: any; }): Observable<any> {
    return this.http.post(AppApiConst.SIGN_UP, {
      username: user.username,
      email: user.email,
      password: user.password
    }, httpOptions);
  }
}
