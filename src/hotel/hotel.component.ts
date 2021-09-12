import {Component, OnInit} from '@angular/core';
import {DeleteHotelService} from 'src/delete/delete-hotel.service';
import {Hotel} from "./hotel";


@Component({
  selector: 'app-delete-hotel',
  styleUrls: ['hotel.component.css'],
  templateUrl: 'hotel.component.html',
  providers: [DeleteHotelService]
})

export class HotelComponent implements OnInit {
  hotels: Hotel[] = [];

  constructor(private httpService: DeleteHotelService, private hotelService: DeleteHotelService) {
  }

  delete(hotel: Hotel): void {
    this.hotels = this.hotels.filter(h => h !== hotel);
    this.hotelService.deleteHotel(hotel.id).subscribe();
  }


  ngOnInit() {

    this.hotelService.getAllHotelPage().subscribe((data: Hotel[]) => this.hotels = data);
  }

  displayedColumns: string[] = ['id', 'hotelName', 'city', 'rating'];

}
