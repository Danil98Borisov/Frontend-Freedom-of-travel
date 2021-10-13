import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {DeleteHotelComponent} from "./components/delete/delete-hotel.component";
import {ApartmentComponent} from "./components/apartment/apartment.component";
import {AddHotelComponent} from 'src/app/components/add-hotel/add-hotel.component';
import {HotelComponent} from 'src/app/components/hotel/hotel.component';
import {EditHotelComponent} from "./components/edit-hotel/edit-hotel.component";
import {ApartmentSearchComponent} from "./components/apartment-search/apartment-search.component";
import {RegisterComponent} from "./components/register/register.component";
import {LoginComponent} from "./components/login/login.component";
import {HotelPreviewComponent} from "./components/hotel-preview/hotel-preview.component";
import {FilterHotelComponent} from "./components/filter-hotel/filter-hotel.component";
import {DetailsHotelComponent} from "./components/details-hotel/details-hotel.component";
import {DetailsComponent} from "./components/details/details.component";
import {ReservationComponent} from 'src/app/components/reservation/reservation.component';
import {NotFoundComponent} from "./components/errors/not-found.component";
import {UserBookingComponent} from "./components/user-booking/user-booking.component";


import {MatTableModule} from '@angular/material/table';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatTabsModule} from '@angular/material/tabs';
import {MatDatepickerModule} from "@angular/material/datepicker";
import {ErrorStateMatcher, MatNativeDateModule, ShowOnDirtyErrorStateMatcher} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from "@angular/material/select";
import {DatePipe} from "@angular/common";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from '@angular/material/button';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {ApartmentPreviewComponent} from "./components/apartment-preview/apartment-preview.component";
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import {MatPaginatorModule} from "@angular/material/paginator";

import {authInterceptorProviders} from "./helpers/auth.interceptor";
import {HotelManagementComponent} from "./components/hotel-management/hotel-management.component";
import {VerificationErrorComponent} from "./components/verification-error/verification-error.component";
import {UserManagerComponent} from "./components/user-manager/user-manager.component";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatListModule} from "@angular/material/list";
import {MatCardModule} from "@angular/material/card";


@NgModule({
  declarations: [
    AppComponent,
    DeleteHotelComponent,
    ApartmentComponent,
    AddHotelComponent,
    ReservationComponent,
    HotelComponent,
    EditHotelComponent,
    ApartmentSearchComponent,
    DetailsComponent,
    ApartmentPreviewComponent,
    HotelPreviewComponent,
    FilterHotelComponent,
    DetailsHotelComponent,
    LoginComponent,
    RegisterComponent,
    NotFoundComponent,
    UserBookingComponent,
    HotelManagementComponent,
    VerificationErrorComponent,
    UserManagerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    MatTabsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    MatExpansionModule,
    MDBBootstrapModule.forRoot(),
    MatPaginatorModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatListModule,
    MatCardModule
  ],
  providers: [DatePipe, {provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher}, authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule {
}
