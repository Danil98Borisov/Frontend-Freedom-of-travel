import {Component, OnInit} from '@angular/core';
import {DeleteHotelService} from "../delete/delete-hotel.service";
import {Hotel} from "../delete/hotel";
import {Apartment} from "../apartment/apartment";
import {ApartmentService} from "../apartment/apartment.service";
import { Router } from '@angular/router';
import {MatTabsModule} from '@angular/material/tabs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  constructor(
    private router:Router //instanciate a router
  ){}

  ngOnInit() {

  }

}
