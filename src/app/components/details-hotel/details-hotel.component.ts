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

@Component({
  selector: 'app-details-hotel',
  styleUrls: ['details-hotel.component.css'],
  templateUrl: 'details-hotel.component.html',
  providers: [DetailsHotelService, ApartmentService]
})

export class DetailsHotelComponent implements OnInit {

  hotels: Hotel[] = [];
  apartments: Apartment[]=[];


  isImage: boolean = true;

  detailsHotel: HotelDetails = {};

  constructor(private activatedRoute: ActivatedRoute,
              private detailsHotelService: DetailsHotelService,
              public userService: UserService,
              private http: HttpClient,
              private apartmentService: ApartmentService,
              private router: Router,
  ) {
  }

  ngOnInit() {
    console.log("HotelPreviewComponent is opened, hotel id = " + this.activatedRoute.snapshot.params.id);

   this.detailsHotelService.getDetailsHotelPage(this.activatedRoute.snapshot.params.id)
     .subscribe((data: HotelDetails) => this.detailsHotel = data,
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
      }, error => {
        console.log('error: ', error);
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
