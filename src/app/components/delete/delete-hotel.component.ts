import {Component, OnInit} from '@angular/core';
import {Hotel} from "./hotel";
import {DeleteHotelService} from "./delete-hotel.service";
import {UserService} from "../../services/user.service";
import {AuthService} from "../../services/auth.service";
import {NotificationService} from "../../services/notification.service";


@Component({
  selector: 'app-hotel',
  styleUrls: ['delete-hotel.component.css'],
  templateUrl: 'delete-hotel.component.html',
  providers: [DeleteHotelService,NotificationService]
})

export class DeleteHotelComponent implements OnInit {
  hotels: Hotel[] = [];

  constructor(private hotelService: DeleteHotelService) {
  }

  delete(hotel: Hotel): void {
    this.hotelService.deleteHotel(hotel.id).subscribe();
  }

  ngOnInit() {

    this.hotelService.getAllHotelPage().subscribe((data: Hotel[]) => this.hotels = data);
  }

}
