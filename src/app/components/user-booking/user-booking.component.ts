import {Component, OnInit} from '@angular/core';
import {Reservation} from '../models/reservation';
import {UserBookingService} from "./user-booking.service";
import {ActivatedRoute} from "@angular/router";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-user-booking',
  styleUrls: ['user-booking.component.css'],
  templateUrl: 'user-booking.component.html',
  providers: [UserBookingService]
})
export class UserBookingComponent implements OnInit {

  reservation: Reservation[] = [];

  constructor(private httpService: UserBookingService,
              private activatedRoute: ActivatedRoute,
              private userService: UserService) {
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

  displayedColumns: string[] = ['id', 'hotelName', 'apartment_id', 'status', 'start_date', 'end_date','email'];
}
