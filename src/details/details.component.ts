import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {DetailsService} from "./details.service";
import {ApartmentDetails} from "../models/apartmentDetails";
import {AppConstComponent} from "../app/app-const.component";
import {NgForm} from "@angular/forms";
import {Apartment} from "../models/apartment";
import {HttpClient} from "@angular/common/http";
import {Reservation} from "../models/reservation";

@Component({
  selector: 'app-details',
  styleUrls: ['details.component.css'],
  templateUrl: 'details.component.html',
  providers: [DetailsService]
})

export class DetailsComponent implements OnInit {

  isImage: boolean = true;

  details: ApartmentDetails = {};
  reservation: Reservation = {};



  constructor(private activatedRoute: ActivatedRoute,
              private detailsService: DetailsService,
              private http: HttpClient
  ) {
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
/*
    console.log("image = " + image);
*/
    return "data:image/png;base64," + image;
  }

  /* ИЗМЕНЕНИЕ АПАРТАМЕНТОВ */
  apartmentUrlEdit = AppConstComponent.API_ENDPOINT + 'apartment/details/edit';

  public editApartment(apartment: Apartment) {
    if (this.details.apartment) {
      apartment.id = this.details.apartment.id;
      apartment.hotel = this.details.apartment.hotel;
    }
    return this.http.post<ApartmentDetails>(this.apartmentUrlEdit, {apartment: apartment, apartmentImages: null})
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
  apartmentUrlBooking = AppConstComponent.API_ENDPOINT + 'reservation/add';

  public bookingApartment(reservation: Reservation) {
    if (this.details.apartment) {
      reservation.apartment = this.details.apartment;
      reservation.hotel = this.details.apartment.hotel;
      reservation.status = "BOOKED";
    }
    console.log("reservation "+ JSON.stringify(reservation))
    return this.http.post<Reservation>(this.apartmentUrlBooking, reservation)
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
