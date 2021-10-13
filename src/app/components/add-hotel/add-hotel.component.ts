import {Component} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Hotel} from 'src/app/components/models/hotel';
import {AddHotelService} from './add-hotel.service';
import {HttpClient} from "@angular/common/http";
import {AppApiConst} from "../../app.api.const";
import {NotificationService} from "../../services/notification.service";
import {AppNotificationConst} from "../../app.notification.const";

@Component({
  selector: 'app-add-hotel',
  styleUrls: ['add-hotel.component.css'],
  templateUrl: 'add-hotel.component.html',
  providers: [AddHotelService,NotificationService]
})
export class AddHotelComponent {

  constructor(private http: HttpClient,
              private notificationService: NotificationService) {
  }

  public addHotel(hotel: Hotel) {

    return this.http.put<Hotel>(AppApiConst.HOTEL_ADD, hotel)
      .subscribe(hotel => {
        console.log("Отель добавлен: ", hotel);
        this.notificationService.openSnackBarWithoutReload(AppNotificationConst.HOTEL_ADDED)
      }, error => {
        console.log('error: ', error);
        this.notificationService.openSnackBarWithoutReload(AppNotificationConst.HOTEL_NOT_ADDED)
      });

  }

  onSubmit(form: NgForm) {
    return this.addHotel(form.value)
  }

}
