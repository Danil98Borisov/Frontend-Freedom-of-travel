import {Component, Input, OnInit} from '@angular/core';
import {Apartment} from "../apartment/apartment";
import { FilterService } from './filter.service';
import {FormControl, FormGroup } from '@angular/forms';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import {Hotel} from "../delete/hotel";
import {DeleteHotelService} from "../delete/delete-hotel.service";

/** @title Datepicker action buttons */
@Component({
  selector: 'app-filter',
  templateUrl: 'filter.component.html',
  styleUrls: ['filter.component.css'],
  providers: [FilterService]
})
export class FilterComponent implements OnInit{

  fil = new FormGroup({
    startDate: new FormControl(),
    endDate: new FormControl(),
    price: new FormControl(),
    city: new FormControl(),
    rating: new FormControl(),
    type: new FormControl()
  });

  apartments: Apartment[]=[];

  constructor(private filterService: FilterService){}


  ngOnInit(){

    this.filterService.getFilterApartment().subscribe((data: Apartment[]) => this.apartments=data);
  }

  displayedColumns: string[] = ['id', 'hotel', 'type', 'price'];

}




