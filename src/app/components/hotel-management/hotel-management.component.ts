import {Component, OnInit} from '@angular/core';
import {HotelManagementService} from "./hotel-management.service";
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../../services/user.service";
import {Hotel} from "../models/hotel";

@Component({
  selector: 'app-user-booking',
  styleUrls: ['hotel-management.component.css'],
  templateUrl: 'hotel-management.component.html',
  providers: [HotelManagementService]
})
export class HotelManagementComponent implements OnInit {

  hotels: Hotel[] = [];

  constructor(private httpService: HotelManagementService,
              private activatedRoute: ActivatedRoute,
              private userService: UserService,
              private router: Router) {
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

  displayedColumns: string[] = ['id', 'hotelName', 'city', 'rating'];
}
