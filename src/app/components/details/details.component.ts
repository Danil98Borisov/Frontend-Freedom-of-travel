import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {DetailsService} from "./details.service";
import {ApartmentDetails} from "../models/apartmentDetails";
import {AppApiConst} from "../../app.api.const";
import {NgForm} from "@angular/forms";
import {Apartment} from "../models/apartment";
import {HttpClient} from "@angular/common/http";
import {UserService} from "../../services/user.service";
import {ReservationRequest} from "../models/reservation.request";

@Component({
  selector: 'app-details',
  styleUrls: ['details.component.css'],
  templateUrl: 'details.component.html',
  providers: [DetailsService]
})

export class DetailsComponent implements OnInit {

  details: ApartmentDetails = {};
  reservationRequest: ReservationRequest = {}

  constructor(private activatedRoute: ActivatedRoute,
              private detailsService: DetailsService,
              public userService: UserService,
              private http: HttpClient) {
  }

  ngOnInit() {
    console.log("ApartmentPreviewComponent is opened, apart id = " + this.activatedRoute.snapshot.params.id);

   this.detailsService.getDetailsApartmentPage(this.activatedRoute.snapshot.params.id)
     .subscribe((data: ApartmentDetails) => this.details = data,
       error => {
         console.log(error);
       });
  }

  getImageApartment(image: any): any{
    // console.log("image = " + image);
    return "data:image/png;base64," + image;
  }

  public editApartment(apartment: Apartment) {
    let apartmentDetails = this.details.apartment;
    if (apartmentDetails) {
      apartment.id = apartmentDetails.id;
      apartment.hotel = apartmentDetails.hotel;
      return this.http.post<ApartmentDetails>(AppApiConst.APARTMENT_DETAILS_EDIT, {
        apartment: apartment,
        apartmentImages: null
      })
        .subscribe(editedApartment => {
          console.log("Апартамент изменён: ", editedApartment);
          this.details.apartment = editedApartment.apartment;
        }, error => {
          console.log('error: ', error);
        });
    }
    return;
  }

  onSubmitEditApartment(form: NgForm) {
    return this.editApartment(form.value,)
  }

  public bookingApartment(reservationRequest: ReservationRequest) {
    if (this.userService.isLoggedIn() && this.details.apartment) {

      reservationRequest.apartmentId = this.details.apartment.id;
      reservationRequest.bookingBy = this.userService.getEmail();

      return this.http.post<ReservationRequest>(AppApiConst.RESERVATION_ADD, reservationRequest)
        .subscribe(booking => {
          console.log("Апартамент забронирован: ", booking);
        }, error => {
          console.log('error: ', error);
        });
    }
    return;
  }

  onSubmitBookingApartment(form: NgForm) {
    console.log("Form: " + JSON.stringify(form.value))
    return this.bookingApartment(form.value)
  }

}
