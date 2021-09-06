import {Component, OnInit} from '@angular/core';
import {Observable, of} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";
import { ApartmentService } from './apartment.service';
import { Apartment } from './apartment';

@Component({
    selector: 'app-apartment',
    styleUrls: ['apartment.component.css'],
    templateUrl: 'apartment.component.html',
    providers: [ApartmentService]
})
export class ApartmentComponent implements OnInit{
  apartments: Apartment[]=[];

  constructor(private httpService: ApartmentService){}

  ngOnInit(){

    this.httpService.getAllApartmentPage().subscribe((data: Apartment[]) => this.apartments=data);
  }

  displayedColumns: string[] = ['id', 'hotel', 'type', 'price'];



}
