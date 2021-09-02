import {Component, OnInit} from '@angular/core';
import {Observable, of} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Hotel} from "./hotel";
import {map} from "rxjs/operators";
import {HotelService} from "./hotel.service";

@Component({
    selector: 'app-hotel',
    template: '<ul>\n' +
      '                <li *ngFor="let hotel of hotels">\n' +
      '                <p>ID: {{hotel?.id}}</p>\n' +
      '                <p>NAME: {{hotel?.hotelName}}</p>\n' +
      '                <p>CITY: {{hotel?.city}}</p>\n' +
      '                <p>RATING: {{hotel?.rating}}</p>\n' +
      '                </li>\n' +
      '            </ul>',
    providers: [HotelService]
})
export class HotelComponent implements OnInit{
  hotels: Hotel[]=[];

  constructor(private httpService: HotelService){}

  ngOnInit(){

    this.httpService.getAllHotelPage().subscribe((data: Hotel[]) => this.hotels=data);
  }



}
