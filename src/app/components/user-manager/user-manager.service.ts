import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';


import {Observable} from 'rxjs';
import {AppApiConst} from "../../app.api.const";
import {User} from "../models/user";
import {Reservation} from "../models/reservation";
import {tap} from "rxjs/operators";

@Injectable()
export class UserManagerService {
  constructor(private http: HttpClient) {
  }

  public getAllUser(): Observable<User[]> {
    return this.http.get<User[]>(AppApiConst.USER_ALL);
  }
  adminRole(id: number){
    return this.http.get<User[]>(AppApiConst.USER_UPDATE_ROLES_ADMIN+"/" + `${id}`).pipe(
      tap(user => {
        console.log("User Admin: ", user);
      }, error => {
        console.log('error: ', error);
      })
    );
  }

}
