import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {DetailsService} from "./details.service";
import {ApartmentDetails} from "../models/apartmentDetails";
import {AppApiConst} from "../../app.api.const";
import {NgForm} from "@angular/forms";
import {Apartment} from "../models/apartment";
import {HttpClient} from "@angular/common/http";
import {UserService} from "../../services/user.service";
import {User} from "../models/user";
import {Role} from "../models/role";
import {ReservationRequest} from "../models/reservation.request";
import {SessionStorageService} from "../../services/session-storage.service";

@Component({
  selector: 'app-details',
  styleUrls: ['details.component.css'],
  templateUrl: 'details.component.html',
  providers: [DetailsService]
})

export class DetailsComponent implements OnInit {

  isImage: boolean = true;
  isLogin: boolean = true;
  roles: string[] = [];
  email: string = '';
  isLoggedIn = false;

  details: ApartmentDetails = {};
  reservationRequest: ReservationRequest = {}
  users: User={}
  role: Role = {}

  constructor(private activatedRoute: ActivatedRoute,
              private detailsService: DetailsService,
              public userService: UserService,
              private http: HttpClient,
              private sessionStorageService: SessionStorageService) {
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
    if (this.details.apartment) {
      apartment.id = this.details.apartment.id;
      apartment.hotel = this.details.apartment.hotel;
    }
    return this.http.post<ApartmentDetails>(AppApiConst.APARTMENT_DETAILS_EDIT, {apartment: apartment, apartmentImages: null})
      .subscribe(editedApartment => {
        console.log("Апартамент изменён: ", editedApartment);
        this.details.apartment = editedApartment.apartment;
      }, error => {
        console.log('error: ', error);
      });
  }

  onSubmitEditApartment(form: NgForm) {
    return this.editApartment(form.value,)
  }


  /*БРОНИРОВАНИЕ АПАРТАМЕНТОВ*/
  public bookingApartment(reservationRequest: ReservationRequest) {
    if (this.details.apartment && this.sessionStorageService.getToken()) {
      this.isLoggedIn = true;

      reservationRequest.apartmentId = this.details.apartment.id;
      reservationRequest.bookingBy = this.sessionStorageService.getUser().email;
    }

    return this.http.post<ReservationRequest>(AppApiConst.RESERVATION_ADD, reservationRequest)
      .subscribe(booking => {
        console.log("Апартамент забронирован: ", booking);
      }, error => {
        console.log('error: ', error);
      });
  }

  onSubmitBookingApartment(form: NgForm) {
    console.log("Form: " + JSON.stringify(form.value))
    return this.bookingApartment(form.value)
  }

}
