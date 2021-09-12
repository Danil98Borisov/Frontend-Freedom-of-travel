import {Component, OnInit} from '@angular/core';
import {ApartmentService} from './apartment.service';
import {Apartment} from './apartment';

@Component({
  selector: 'app-apartment',
  styleUrls: ['apartment.component.css'],
  templateUrl: 'apartment.component.html',
  providers: [ApartmentService]
})
export class ApartmentComponent implements OnInit {
  apartments: Apartment[] = [];

  constructor(private apartmentService: ApartmentService) {
  }

  ngOnInit() {

    this.apartmentService.getAllApartmentPage().subscribe((data: Apartment[]) => this.apartments = data);
  }

  displayedColumns: string[] = ['id', 'hotel', 'type', 'price'];
}
