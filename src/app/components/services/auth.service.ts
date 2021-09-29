import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {AppApiConst} from "../../app.api.const";

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

  signIn(credentials: { username: any; password: any; }): Observable<any> {
    return this.http.post(AppApiConst.SIGN_IN, {
      username: credentials.username,
      password: credentials.password
    }, httpOptions);
  }

  signOut(): void {
    console.log("Signing out");
    this.http.post(AppApiConst.SIGN_OUT, {})
      .subscribe((res)=>{
          console.log("Successfully signed out");
        },
        error => {
          console.log("Error occurred during signing out:", error);
        });
    window.sessionStorage.clear();
  }

  public sendMessage(isLogin: boolean) {
    this.isLogin.next(isLogin);
  }

}
