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
import {NotificationService} from "../../services/notification.service";

@Component({
  selector: 'app-details',
  styleUrls: ['details.component.css'],
  templateUrl: 'details.component.html',
  providers: [DetailsService,NotificationService]
})

export class DetailsComponent implements OnInit {

  details: ApartmentDetails = {};
  reservationRequest: ReservationRequest = {}
  reservationResponses: ReservationResponse={};

  fil = new FormGroup({
    startDate: new FormControl(),
    endDate: new FormControl(),
    apartmentId: new FormControl(),
    bookingBy: new FormControl()
  });

  statusFailed = false;
  statusSuccessfully = false;
  statusError = false;
  Message = '';

  constructor(private activatedRoute: ActivatedRoute,
              private detailsService: DetailsService,
              public userService: UserService,
              private http: HttpClient,
              private datePipe: DatePipe,
              private _snackBar: MatSnackBar,
              private notificationService: NotificationService) {
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
      console.log("apartmentDetails: " + JSON.stringify(apartmentDetails))
      apartment.id = apartmentDetails.id;
      apartment.hotel = apartmentDetails.hotel;
      apartment.type = apartmentDetails.type;
      console.log("apartment: " + JSON.stringify(apartment))


      return this.http.post<ApartmentDetails>(AppApiConst.APARTMENT_DETAILS_EDIT, {
        apartment: apartment,
        apartmentImages: null
      })
        .subscribe(editedApartment => {
          console.log("Апартамент изменён: ", editedApartment);
          this.details.apartment = editedApartment.apartment;
          this.notificationService.openSnackBar(3)

        }, error => {
          console.log('error: ', error);
          this.notificationService.openSnackBar(3)

        });
    }
    return;
  }

  onSubmitEditApartment(form: NgForm) {
    return this.editApartment(form.value,)
  }

  public bookingApartment(fil: FormGroup) {
    if (this.userService.isLoggedIn() && this.details.apartment) {

      let startDate = this.datePipe.transform(fil.value.startDate, 'yyyy-MM-dd');
      let endDate = this.datePipe.transform(fil.value.endDate, 'yyyy-MM-dd');

      fil.value.apartmentId = this.details.apartment.id;
      fil.value.bookingBy = this.userService.getEmail();
      fil.value.startDate = startDate;
      fil.value.endDate = endDate;

      console.log("Форма: " + JSON.stringify(fil.value))
      console.log("startDate: "+ fil.value.startDate)
      console.log("endDate: "+ fil.value.endDate)
      console.log("apartmentId: "+ fil.value.apartmentId)


      this.detailsService.getOccupiedApartment(fil.value)
        .subscribe((data: ReservationResponse) => {this.reservationResponses = data,
          console.log("data: "+ JSON.stringify(data));
            console.log("data: "+ data.message);
          if(data.status){
            this.statusSuccessfully = true;
            this.statusFailed = false;
          console.log("Apartment booking: " + JSON.stringify(fil.value))
            // @ts-ignore
            this.Message = data.message;
          }
          else{
            this.statusFailed = true;
            this.statusSuccessfully = false;
            // @ts-ignore
            this.Message = data.message;
          }
          },
          err => {
            this.Message = err.error.message;
            this.statusError = true;
          });
    }
    return;
  }

}
