import {Component, OnInit} from '@angular/core';
import {ApartmentService} from './apartment.service';
import {Apartment} from '../models/apartment';
import {DetailsComponent} from "../details/details.component";
import {ActivatedRoute, Router} from "@angular/router";
import {DetailsService} from "../details/details.service";
import {Details} from "../models/details";
import {ApartmentPreview} from "../models/apartmentPreview";
import {ApartmentPreviewService} from "../apartment-preview/apartment-preview.service";

@Component({
  selector: 'app-apartment',
  styleUrls: ['apartment.component.css'],
  templateUrl: 'apartment.component.html',
  providers: [ApartmentService, DetailsComponent, DetailsService, ApartmentPreviewService]
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
  details: Details[] = [];
  apartmentsPreviews: ApartmentPreview[]=[];
 /* displayedColumns = this.columns.map(c => c.columnDef);*/


  constructor(private apartmentService: ApartmentService,
              private detailsComponent: DetailsComponent,
              private detailsService: DetailsService,
              private apartmentPreviewService: ApartmentPreviewService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
  }

  detailUrl="http://localhost:4200/apartment/details"
  ngOnInit() {

    // todo зачем 2 коллекции?
    this.apartmentService.getAllApartmentPage()
      .subscribe((data: Apartment[]) => this.apartments = data);

    console.log("activatedRoute params: ", JSON.stringify(this.activatedRoute.snapshot.params));

    this.apartmentPreviewService.getApartmentPreviewPage()
      .subscribe((data: ApartmentPreview[]) => this.apartmentsPreviews = data);

  }

   isImage: boolean = true;
  getImageApartment(image: any, apartId: any): any{

    if (image) {
      console.log("raster is OK for apart : ", apartId)
    } else if(!image) {
      console.log("raster is null for apart : ", apartId)
    }
    return "data:image/png;base64," + image;
  }
  displayedColumns: string[] = ['photo', 'hotel', 'type', 'price'];



}
