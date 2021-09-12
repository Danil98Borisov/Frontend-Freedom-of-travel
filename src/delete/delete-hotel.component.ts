import {Component, OnInit} from '@angular/core';
import {Hotel} from "./hotel";
import {DeleteHotelService} from "./delete-hotel.service";


@Component({
  selector: 'app-hotel',
  styleUrls: ['delete-hotel.component.css'],
  templateUrl: 'delete-hotel.component.html',
  providers: [DeleteHotelService]
})

export class DeleteHotelComponent implements OnInit {
  hotels: Hotel[] = [];

  constructor(private hotelService: DeleteHotelService) {
  }

  delete(hotel: Hotel): void {
    this.hotels = this.hotels.filter(h => h !== hotel);
    this.hotelService.deleteHotel(hotel.id).subscribe();
  }

  ngOnInit() {

    this.hotelService.getAllHotelPage().subscribe((data: Hotel[]) => this.hotels = data);
  }

}
