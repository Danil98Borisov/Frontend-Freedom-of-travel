import {Component, OnInit} from '@angular/core';
import {Reservation} from '../models/reservation';
import {ReservationService} from './reservation.service';

@Component({
  selector: 'app-reservation',
  styleUrls: ['reservation.component.css'],
  templateUrl: 'reservation.component.html',
  providers: [ReservationService]
})
export class ReservationComponent implements OnInit {
  reservation: Reservation[] = [];

  constructor(private httpService: ReservationService) {
  }

  ngOnInit() {

    this.httpService.getAllReservationPage().subscribe((data: Reservation[]) => this.reservation = data);
  }

  displayedColumns: string[] = ['Id',  'Apartment Type', 'Status', 'Start Date', 'End Date',
    'Reservation date', 'Modified When', 'Modified By', 'Email'];
}
