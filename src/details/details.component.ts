import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {DetailsService} from "./details.service";
import {ApartmentDetails} from "../models/apartmentDetails";
import {AppApiConst} from "../app/app.api.const";
import {NgForm} from "@angular/forms";
import {Apartment} from "../models/apartment";
import {HttpClient} from "@angular/common/http";
import {Reservation} from "../models/reservation";
import {UserService} from "../services/user.service";
import {TokenStorageService} from "../services/token-storage.service";
import {User} from "../models/user";
import {Role} from "../models/role";

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
  reservation: Reservation = {};
  users: User={}
  role: Role = {}

  constructor(private activatedRoute: ActivatedRoute,
              private detailsService: DetailsService,
              public userService: UserService,
              private http: HttpClient,
              private tokenStorage: TokenStorageService) {
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
  public bookingApartment(reservation: Reservation) {
    if (this.details.apartment && this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
      const user = this.tokenStorage.getUser();

      this.role.id = 1;
      this.role.name = this.roles.toString();

      this.users.id=user.id;
      this.users.username=user.username;
      this.users.email=user.email;
      this.users.password="";

      reservation.apartment = this.details.apartment;
      reservation.hotel = this.details.apartment.hotel;
      reservation.user = this.users;

      console.log("reservation.users: " + JSON.stringify(user.password))
      reservation.status = "BOOKED";
    }
    console.log("reservation "+ JSON.stringify(reservation))
    return this.http.post<Reservation>(AppApiConst.RESERVATION_ADD, reservation)
      .subscribe(bookingApartment => {
        console.log("Апартамент забронирован: ", bookingApartment);
        this.reservation.apartment = bookingApartment.apartment;
        this.reservation.hotel = bookingApartment.hotel;
      }, error => {
        console.log('error: ', error);
      });
  }

  onSubmitBookingApartment(form: NgForm) {
    console.log("Form: " + form.value)
    return this.bookingApartment(form.value)
  }

}
