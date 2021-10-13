import {Component, OnInit} from '@angular/core';
import {Reservation} from '../models/reservation';
import {UserBookingService} from "./user-booking.service";
import {ActivatedRoute} from "@angular/router";
import {UserService} from "../../services/user.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {NotificationService} from "../../services/notification.service";
import {AppNotificationConst} from "../../app.notification.const";
import {map} from "rxjs/operators";
import {ReservationService} from "../reservation/reservation.service";

@Component({
  selector: 'app-user-booking',
  styleUrls: ['user-booking.component.css'],
  templateUrl: 'user-booking.component.html',
  providers: [UserBookingService,NotificationService,ReservationService]
})
export class UserBookingComponent implements OnInit {

  reservation: Reservation[] = [];

  constructor(private httpService: UserBookingService,
              private activatedRoute: ActivatedRoute,
              private userService: UserService,
              private _snackBar: MatSnackBar,
              private notificationService: NotificationService,
              private reservationService: ReservationService) {
  }

  ngOnInit() {
    if (this.userService.isLoggedIn()) {
      const email = this.userService.getEmail();
      console.log("this.email: "+ email)

      this.httpService.getAllReservationUser(email)
        .subscribe((data: Reservation[]) => {
          //console.log("data" + JSON.stringify(data));
          this.reservation = data
        });
    }
}
  public cancel(id: number): void {
    this.httpService.cancelReservation(id).subscribe((data: Reservation[]) => {
      this.reservation = data,
        this.notificationService.openSnackBar(AppNotificationConst.RESERVATION_CANCELED)
    }, error => {
      console.log('error: ', error);
      this.notificationService.openSnackBar(AppNotificationConst.RESERVATION_NOT_CANCELED)
    })
  }


  displayedColumns: string[] = ['Id', 'Hotel Name', 'Apartment Name', 'Status', 'Start date', 'End date', 'Email', 'Actions'];
}
