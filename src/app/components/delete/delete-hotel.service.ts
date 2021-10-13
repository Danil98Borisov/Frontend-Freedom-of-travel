import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';


import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import {Hotel} from "./hotel";
import {AppApiConst} from "../../app.api.const";
import {NotificationService} from "../../services/notification.service";
import {AppNotificationConst} from "../../app.notification.const";


@Injectable()
export class DeleteHotelService {
  constructor(private http: HttpClient,
              private notificationService: NotificationService) {
  }

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  public getAllHotelPage(): Observable<Hotel[]> {
    console.log("getAllHotelPage invoked");
    return this.http.get<Hotel[]>(AppApiConst.HOTEL_ALL);
  }

  deleteHotel(id: number): Observable<Hotel> {
    const url = `${AppApiConst.HOTEL_DELETE}/${id}`;

    return this.http.delete<Hotel>(url, this.httpOptions).pipe(
      tap(hotel => {
        console.log("Отель удалён: ", hotel);
        this.notificationService.openSnackBarWithoutReload(AppNotificationConst.HOTEL_BEEN_REMOVED)
      }, error => {
        console.log('error: ', error);
        this.notificationService.openSnackBarWithoutReload(AppNotificationConst.HOTEL_NOT_BEEN_REMOVED)
      })
    );

  }

}
