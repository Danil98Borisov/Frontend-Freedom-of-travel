import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {DetailsHotelService} from "./details-hotel.service";
import {NgForm} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {HotelDetails} from "../models/hotelDetails";
import {Hotel} from "../models/hotel";
import {AppApiConst} from "../../app.api.const";
import {UserService} from "../../services/user.service";
import {ApartmentService} from "../apartment/apartment.service";
import {Apartment} from "../models/apartment";
import {HotelManagementService} from "../hotel-management/hotel-management.service";
import {NotificationService} from "../../services/notification.service";

@Component({
  selector: 'app-details-hotel',
  styleUrls: ['details-hotel.component.css'],
  templateUrl: 'details-hotel.component.html',
  providers: [DetailsHotelService, ApartmentService,HotelManagementService,NotificationService]
})

export class DetailsHotelComponent implements OnInit {

  hotels: Hotel[] = [];
  apartments: Apartment[]=[];


  isImage: boolean = true;

  detailsHotel: HotelDetails = {};

  isFlag: boolean = this.userService.isAdmin() || this.userService.isAdvertiser();

  constructor(private activatedRoute: ActivatedRoute,
              private detailsHotelService: DetailsHotelService,
              private hotelManagementService: HotelManagementService,
              public userService: UserService,
              private http: HttpClient,
              private apartmentService: ApartmentService,
              private router: Router,
              private notificationService: NotificationService
  ) {
  }

  ngOnInit() {

    console.log("HotelPreviewComponent is opened, hotel id = " + this.activatedRoute.snapshot.params.id);
    console.log("this.userService.getEmail(): "+ this.userService.getEmail())
    console.log("editAllowed: " + this.isFlag)
    console.log("this.userService.isAdmin(): " + this.userService.isAdmin())
    console.log("this.userService.isAdvertiser(): " + this.userService.isAdvertiser())

   this.detailsHotelService.getDetailsHotelPage(this.activatedRoute.snapshot.params.id)
     .subscribe((data: HotelDetails) => {
       this.detailsHotel = data,
         console.log("this.detailsHotel.editAllowed: " + this.detailsHotel?.editAllowed)
         if(this.isFlag && this.detailsHotel?.editAllowed) {
           this.isFlag = true;
         }
         else {
           this.isFlag = false;
         }

     },
       error => {
         console.log(error);
       });

    this.apartmentService.getApartmentInHotel(this.activatedRoute.snapshot.params.id).subscribe((data: Apartment[]) => this.apartments = data);
  }

  getImageHotel(image: any): any{
    //console.log("image = " + image);
    return "data:image/png;base64," + image;
  }

  public editHotel(hotel: Hotel) {
    if (this.detailsHotel.hotel) {
      hotel.id = this.detailsHotel.hotel.id;
    }
    return this.http.post<HotelDetails>(AppApiConst.HOTEL_DETAILS_EDIT, {hotel: hotel, hotelImages: null})
      .subscribe(editedHotel => {
        console.log("Отель изменён: ", editedHotel);
        this.detailsHotel.hotel = editedHotel.hotel;
        this.notificationService.openSnackBar(3)
      }, error => {
        console.log('error: ', error);
        this.notificationService.openSnackBar(4)
      });
  }

  onSubmitEditHotel(form: NgForm) {
    return this.editHotel(form.value)
  }

  logFunc(id: any) {
    console.log("Hi, I'm apartmentPreviews " + id);
    this.router.navigate(['/apartment-details', id])
  }
  displayedColumns: string[] = ['hotel','type', 'price', 'description'];
}
