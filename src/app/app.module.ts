import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {HotelComponent} from "../hotel/hotel.component";
import {ApartmentComponent} from "../apartment/apartment.component";
import { AddHotelComponent } from 'src/add-hotel/add-hotel.component';
import { DeleteHotelComponent } from 'src/delete/delete-hotel.component';
import {EditHotelComponent} from "../edit-hotel/edit-hotel.component";

import {MatTableModule} from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { ReservationComponent } from 'src/reservation/reservation.component';



@NgModule({
  declarations: [
    AppComponent,
    HotelComponent,
    ApartmentComponent,
    AddHotelComponent,
    ReservationComponent,
    DeleteHotelComponent,
    EditHotelComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
