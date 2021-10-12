import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {AppApiConst} from "../app.api.const";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UserRegistrationService {

  constructor(private http: HttpClient) { }

  register(user: { username: any; email: any; password: any; }, stringCode: string): Observable<any> {
    return this.http.post(AppApiConst.SIGN_UP, {
      username: user.username,
      email: user.email,
      password: user.password,
      verificationCode: stringCode,
      verifyEnabled: false
    }, httpOptions);
  }

  resendVerifyUserEmail(email: string): any{
    const params = {"email": email};
    console.log("params: ", params);
    return this.http.get(AppApiConst.VERIFY_USER_EMAIL, {params});
  }

}
