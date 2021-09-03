import {Component, OnInit} from '@angular/core';
import {HotelService} from "../hotel/hotel.service";
import {Hotel} from "../hotel/hotel";
import {Apartment} from "../apartment/apartment";
import {ApartmentService} from "../apartment/apartment.service";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',

})
export class AppComponent implements OnInit {

  ngOnInit(){

  }
}

