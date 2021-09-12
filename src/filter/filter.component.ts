import {Component, OnInit} from '@angular/core';
import {Apartment} from "../apartment/apartment";
import {FilterService} from './filter.service';
import {FormControl, FormGroup} from '@angular/forms';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-filter',
  templateUrl: 'filter.component.html',
  styleUrls: ['filter.component.css'],
  providers: [FilterService]
})
export class FilterComponent implements OnInit {

  fil = new FormGroup({
    startDate: new FormControl(),
    endDate: new FormControl(),
    price: new FormControl(),
    city: new FormControl(),
    rating: new FormControl(),
    type: new FormControl()
  });

  columns = [
    {
      columnDef: 'city',
      header: 'City',
      cell: (element: any) => `${element.hotel.city}`
    },
    {
      columnDef: 'hotel',
      header: 'Name Hotel',
      cell: (element: any) => `${element.hotel.hotelName}`
    },
    {
      columnDef: 'rating',
      header: 'Rating hotel',
      cell: (element: any) => `${element.hotel.rating}`
    },
    {
      columnDef: 'type',
      header: 'Type apartment',
      cell: (element: Apartment) => `${element.type}`
    },
    {
      columnDef: 'price',
      header: 'Price',
      cell: (element: Apartment) => `${element.price} $`
    },
  ];
  apartments: Apartment[] = [];
  displayedColumns = this.columns.map(c => c.columnDef);

  constructor(private filterService: FilterService,
              private datePipe: DatePipe) {
  }

  public filter(fil: FormGroup): void {
    console.log('fil.value.startDate = ', fil.value['startDate'])
    console.log('fil.value.startDate = ',)
    let ap: Apartment = fil.value

    let startDate = this.datePipe.transform(fil.value['startDate'], 'yyyy-MM-dd');
    let endDate = this.datePipe.transform(fil.value['endDate'], 'yyyy-MM-dd');
    this.filterService.filterApartment(ap.price, ap.type, startDate, endDate, fil.value['city'], fil.value['rating'])
      .subscribe((data: Apartment[]) => this.apartments = data);
  }

  ngOnInit() {
  }

}
