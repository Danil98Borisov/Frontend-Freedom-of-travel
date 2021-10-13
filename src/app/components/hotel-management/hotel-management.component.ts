import {Component, OnInit} from '@angular/core';
import {HotelManagementService} from "./hotel-management.service";
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../../services/user.service";
import {Hotel} from "../models/hotel";
import {DeleteHotelService} from "../delete/delete-hotel.service";
import {NotificationService} from "../../services/notification.service";

@Component({
  selector: 'app-user-booking',
  styleUrls: ['hotel-management.component.css'],
  templateUrl: 'hotel-management.component.html',
  providers: [HotelManagementService,DeleteHotelService, NotificationService]
})
export class HotelManagementComponent implements OnInit {

  hotels: Hotel[] = [];

  constructor(private httpService: HotelManagementService,
              private activatedRoute: ActivatedRoute,
              private userService: UserService,
              private router: Router,
              private hotelService: DeleteHotelService) {
  }

  ngOnInit() {
    if (this.userService.isLoggedIn() && this.userService.isAdvertiser()) {
      const email = this.userService.getEmail();
      console.log("this.email: "+ email)

      this.httpService.getHotelUser(email)
        .subscribe((data: Hotel[]) => {
          //console.log("data" + JSON.stringify(data));
          this.hotels = data
        });
    }

    if (this.userService.isLoggedIn() && this.userService.isAdmin()) {
      const email = this.userService.getEmail();
      console.log("this.email: "+ email)

      this.httpService.getAllHotelUser()
        .subscribe((data: Hotel[]) => {
          //console.log("data" + JSON.stringify(data));
          this.hotels = data
        });
    }

}

  logFunc(id: any) {
    console.log("Hi, I'm hotelPreviews " + id);
    this.router.navigate(['/hotel-details', id])
  }

  deleteHotel(id: any) {
    this.hotelService.deleteHotel(id).subscribe();
  }

  displayedColumns: string[] = ['Id', 'Name', 'City', 'Rating', 'Actions'];
}
