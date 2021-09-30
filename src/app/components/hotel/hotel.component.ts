import {Component, OnInit} from '@angular/core';
import {Hotel} from "../models/hotel";
import {HotelService} from './hotel.service';


@Component({
  selector: 'app-delete-hotel',
  styleUrls: ['hotel.component.css'],
  templateUrl: 'hotel.component.html',
  providers: [HotelService]
})

export class HotelComponent implements OnInit {
  hotels: Hotel[] = [];

  constructor(private hotelService: HotelService) {
  }


  ngOnInit() {

    this.hotelService.getAllHotelPage().subscribe((data: Hotel[]) => this.hotels = data);
  }

  displayedColumns: string[] = ['id', 'hotelName', 'city', 'rating'];

}
