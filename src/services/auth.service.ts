import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {AppApiConst} from "../app/app.api.const";

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isLogin = new BehaviorSubject<boolean>(false);
  public currentIsLogIn = this.isLogin.asObservable();

  constructor(private http: HttpClient) {}

  login(credentials: { username: any; password: any; }): Observable<any> {
    return this.http.post(AppApiConst.SIGN_IN, {
      username: credentials.username,
      password: credentials.password
    }, httpOptions);
  }

  public sendMessage(isLogin: boolean) {
    this.isLogin.next(isLogin);
  }

}
