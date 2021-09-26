import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {DetailsHotelService} from "./details-hotel.service";
import {NgForm} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {Reservation} from "../models/reservation";
import {HotelDetails} from "../models/hotelDetails";
import {Hotel} from "../models/hotel";
import {AppApiConst} from "../app/app.api.const";

@Component({
  selector: 'app-details-hotel',
  styleUrls: ['details-hotel.component.css'],
  templateUrl: 'details-hotel.component.html',
  providers: [DetailsHotelService]
})

export class DetailsHotelComponent implements OnInit {

  isImage: boolean = true;

  detailsHotel: HotelDetails = {};

  constructor(private activatedRoute: ActivatedRoute,
              private detailsHotelService: DetailsHotelService,
              private http: HttpClient
  ) {
  }

  ngOnInit() {
    console.log("HotelPreviewComponent is opened, hotel id = " + this.activatedRoute.snapshot.params.id);

   this.detailsHotelService.getDetailsHotelPage(this.activatedRoute.snapshot.params.id)
     .subscribe((data: HotelDetails) => this.detailsHotel = data,
       error => {
         console.log(error);
       });
  }

  getImageHotel(image: any): any{
/*
    console.log("image = " + image);
*/
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
}
