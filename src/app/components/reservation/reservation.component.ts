import {Component, OnInit} from '@angular/core';
import {Reservation} from '../models/reservation';
import {ReservationService} from './reservation.service';
import {PageEvent} from "@angular/material/paginator";

@Component({
  selector: 'app-reservation',
  styleUrls: ['reservation.component.css'],
  templateUrl: 'reservation.component.html',
  providers: [ReservationService]
})
export class ReservationComponent implements OnInit {

  reservations: Reservation[] = [];

  // MatPaginator Inputs
  length = 30;
  pageSize = 10;

  // MatPaginator Output
  pageEvent: PageEvent[]=[];

  constructor(private httpService: ReservationService) {
  }

  ngOnInit() {
    this.httpService.getAllReservationsPaginated(0, this.pageSize)
      .subscribe((data: Reservation[]) => this.reservations = data);
  }

  getReservationsPaginated(pageNumber: number) {
    this.httpService.getAllReservationsPaginated(pageNumber, this.pageSize)
      .subscribe((data: Reservation[]) => this.reservations = data);
  }

  displayedColumns: string[] = ['Id',  'Apartment Type', 'Status', 'Start Date', 'End Date',
    'Reservation date', 'Modified When', 'Modified By', 'Email'];
}
