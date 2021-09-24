import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {DeleteHotelComponent} from "../delete/delete-hotel.component";
import {ApartmentComponent} from "../apartment/apartment.component";
import {AddHotelComponent} from 'src/add-hotel/add-hotel.component';
import {HotelComponent} from 'src/hotel/hotel.component';
import {EditHotelComponent} from "../edit-hotel/edit-hotel.component";
import {FilterComponent} from "../filter/filter.component";

import {MatTableModule} from '@angular/material/table';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatTabsModule} from '@angular/material/tabs';
import {ReservationComponent} from 'src/reservation/reservation.component';
import {MatDatepickerModule} from "@angular/material/datepicker";
import {ErrorStateMatcher, MatNativeDateModule, ShowOnDirtyErrorStateMatcher} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from "@angular/material/select";
import {DatePipe} from "@angular/common";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from '@angular/material/button';
import {MatExpansionModule} from '@angular/material/expansion';
import {DetailsComponent} from "../details/details.component";
import {ApartmentPreviewComponent} from "../apartment-preview/apartment-preview.component";
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import {HomeComponent} from "../home/home.component";
import {HotelPreviewComponent} from "../hotel-preview/hotel-preview.component";
import {FilterHotelComponent} from "../filter-hotel/filter-hotel.component";

@NgModule({
  declarations: [
    AppComponent,
    DeleteHotelComponent,
    ApartmentComponent,
    AddHotelComponent,
    ReservationComponent,
    HotelComponent,
    EditHotelComponent,
    FilterComponent,
    DetailsComponent,
    ApartmentPreviewComponent,
    HomeComponent,
    HotelPreviewComponent,
    FilterHotelComponent
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
    MDBBootstrapModule.forRoot()

  ],
  providers: [DatePipe, {provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
