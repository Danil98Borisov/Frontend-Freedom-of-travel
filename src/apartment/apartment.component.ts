import {Component, OnInit} from '@angular/core';
import {ApartmentService} from './apartment.service';
import {Apartment} from './apartment';
import {DetailsComponent} from "../details/details.component";
import {Router} from "@angular/router";
import {DetailsService} from "../details/details.service";

@Component({
  selector: 'app-apartment',
  styleUrls: ['apartment.component.css'],
  templateUrl: 'apartment.component.html',
  providers: [ApartmentService, DetailsComponent, DetailsService]
})
export class ApartmentComponent implements OnInit {

/*  columns = [
    {
      columnDef: 'id',
      header: 'id',
      cell: (element: any) => `${element.id}`
    },
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
    {
      columnDef: 'raster',
      header: 'raster',
      cell: (element: Apartment) => `${element.raster} $`
    }
  ];*/
  apartments: Apartment[] = [];
 /* displayedColumns = this.columns.map(c => c.columnDef);*/


  constructor(private apartmentService: ApartmentService,
              private detailsComponent: DetailsComponent,
              private detailsService: DetailsService,
              private router: Router,) {
  }

  detailUrl="http://localhost:4200/apartment/details"
  ngOnInit() {

    this.apartmentService.getAllApartmentPage().subscribe((data: Apartment[]) => this.apartments = data);
  }

  /*clickedRows = new Set<Apartment>();*/

    public details(id:number): any  {
      console.log(this.detailUrl)
      return this.detailsComponent.detailsApartment(id);
    }

    logFunc(row: any) {
      console.log("Hi, I'm row" + row.id);
      this.router.navigate(['/apartment-details', row.id])
    }

  isImage: boolean = true;
  getImageApartment(image: any): any{
    if (this.isImage) {
      console.log("raster: ", image)
      return "data:image/png;base64," + image;

    } else {
      this.isImage = false;
    }
  }
  displayedColumns: string[] = ['id', 'hotel', 'type', 'price','photo'];


}
