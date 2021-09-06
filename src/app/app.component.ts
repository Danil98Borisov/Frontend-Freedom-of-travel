import {Component, OnInit} from '@angular/core';
import {HotelService} from "../hotel/hotel.service";
import {Hotel} from "../hotel/hotel";
import {Apartment} from "../apartment/apartment";
import {ApartmentService} from "../apartment/apartment.service";
import { Router } from '@angular/router';
import {MatTabsModule} from '@angular/material/tabs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',

})

export class AppComponent implements OnInit {

  constructor(
    private router:Router //instanciate a router
  ){}

  ngOnInit() {

  }

}
