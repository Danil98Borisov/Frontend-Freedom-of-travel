import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {Observable, of} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Hotel} from "./hotel";
import {map} from "rxjs/operators";
import {HotelService} from "./hotel.service";
import { MatTable } from '@angular/material/table';


@Component({
    selector: 'app-hotel',
    styleUrls: ['hotel.component.css'],
    templateUrl: 'hotel.component.html',
    providers: [HotelService]
})

export class HotelComponent implements OnInit {
   hotels: Hotel[]=[];

  constructor(private httpService: HotelService){}


  ngOnInit(){

    this.httpService.getAllHotelPage().subscribe((data: Hotel[]) => this.hotels=data);
  }

  displayedColumns: string[] = ['id', 'hotelName', 'city', 'rating'];

/*
  dataSource = [...this.hotels];

  @ViewChild(MatTable) table!: MatTable<Hotel>;

  addData() {
    this.httpService.addHotel()
  }*/
}
