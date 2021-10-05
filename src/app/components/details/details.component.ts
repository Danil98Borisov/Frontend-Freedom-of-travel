import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {DetailsService} from "./details.service";
import {ApartmentDetails} from "../models/apartmentDetails";
import {AppApiConst} from "../../app.api.const";
import {FormControl, FormGroup, NgForm} from "@angular/forms";
import {Apartment} from "../models/apartment";
import {HttpClient} from "@angular/common/http";
import {UserService} from "../../services/user.service";
import {ReservationRequest} from "../models/reservation.request";
import {ReservationResponse} from "../models/reservation.response";
import {DatePipe} from "@angular/common";
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-details',
  styleUrls: ['details.component.css'],
  templateUrl: 'details.component.html',
  providers: [DetailsService]
})

export class DetailsComponent implements OnInit {

  details: ApartmentDetails = {};
  reservationRequest: ReservationRequest = {}
  reservationResponses: ReservationResponse[]=[];

  fil = new FormGroup({
    start_date: new FormControl(),
    end_date: new FormControl(),
    apartmentId: new FormControl(),
    bookingBy: new FormControl()
  });

  constructor(private activatedRoute: ActivatedRoute,
              private detailsService: DetailsService,
              public userService: UserService,
              private http: HttpClient,
              private datePipe: DatePipe,
              private _snackBar: MatSnackBar) {
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

  public bookingApartment(fil: FormGroup) {
    if (this.userService.isLoggedIn() && this.details.apartment) {

      let startDate = this.datePipe.transform(fil.value.start_date, 'yyyy-MM-dd');
      let endDate = this.datePipe.transform(fil.value.end_date, 'yyyy-MM-dd');

      fil.value.apartmentId = this.details.apartment.id;
      fil.value.bookingBy = this.userService.getEmail();
      fil.value.start_date = startDate;
      fil.value.end_date = endDate;

      console.log("Форма: " + JSON.stringify(fil.value))
      console.log("start_date: "+ fil.value.start_date)
      console.log("end_date: "+ fil.value.end_date)
      console.log("apartmentId: "+ fil.value.apartmentId)

      this.detailsService.getOccupiedApartment(startDate, endDate, fil.value.apartmentId)
        .subscribe((data: ReservationResponse[]) => {this.reservationResponses = data,
          console.log("data: "+ data)

          if(data){
            this._snackBar.open('Апартамент уже занят. Выберете другие даты','Close');
            console.log("Апартамент уже забронирован на эти даты.")
          }
          else{
            this._snackBar.open('Апартамент успешно забронирова!!!','Close');

            this.http.post<ReservationRequest>(AppApiConst.RESERVATION_ADD, fil.value)
              .subscribe(booking => {
                console.log("fil.value: "+ JSON.stringify(fil.value))
                console.log("Апартамент забронирован: ", booking);
              }, error => {
                console.log('error: ', error);
              });
          }});
    }
    return;
  }

}
