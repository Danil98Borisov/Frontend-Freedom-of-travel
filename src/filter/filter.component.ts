import {Component, OnInit} from '@angular/core';
import {Apartment} from "../models/apartment";
import {FilterService} from './filter.service';
import {FormControl, FormGroup} from '@angular/forms';
import {DatePipe} from '@angular/common';
import {ActivatedRoute, Router} from "@angular/router";
import {ApartmentPreview} from "../models/apartmentPreview";
import {ApartmentService} from "../apartment/apartment.service";
import {DetailsComponent} from "../details/details.component";
import {DetailsService} from "../details/details.service";
import {ApartmentPreviewService} from "../apartment-preview/apartment-preview.service";

@Component({
  selector: 'app-filter',
  templateUrl: 'filter.component.html',
  styleUrls: ['filter.component.css'],
  providers: [FilterService,ApartmentService, DetailsComponent, DetailsService, ApartmentPreviewService]
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

/*  columns = [    {
    columnDef: 'image',
    header: 'Image',*/
    /*cell: (element: any) => `${this.getImageApartment(`${element.imageApartment.image}`,`${element.apartment.id}`)}`*/
/*    cell: (element: any) => `<script type="text/html">
                                    <ng-template [ngIf]="isImage">
                                        <div class="picture-box">
                                            <img width="150" height="150" [src]="getImageApartment(apartmentPreview.imageApartment.image, apartmentPreview.apartment.id)">
                                        </div>
                                    </ng-template>
                           </script>
                           `
  },
    {
      columnDef: 'city',
      header: 'City',
      cell: (element: any) => `${element.apartment.hotel.city}`
    },
    {
      columnDef: 'hotel',
      header: 'Name Hotel',
      cell: (element: any) => `${element.apartment.hotel.hotelName}`
    },
    {
      columnDef: 'rating',
      header: 'Rating hotel',
      cell: (element: any) => `${element.apartment.hotel.rating}`
    },
    {
      columnDef: 'type',
      header: 'Type apartment',
      cell: (element: any) => `${element.apartment.type}`
    },
    {
      columnDef: 'price',
      header: 'Price',
      cell: (element: any) => `${element.apartment.price} $`
    },
  ];*/

/*
  apartments: Apartment[] = [];
*/

  apartmentsPreviews: ApartmentPreview[]=[];

/*
  displayedColumns = this.columns.map(c => c.columnDef);
*/

  constructor(private filterService: FilterService,
              private datePipe: DatePipe,
              private router: Router,
              private apartmentService: ApartmentService,
              private detailsComponent: DetailsComponent,
              private detailsService: DetailsService,
              private apartmentPreviewService: ApartmentPreviewService,
              private activatedRoute: ActivatedRoute) {
  }

  public filter(fil: FormGroup): void {
    console.log('fil.value.startDate = ', fil.value['startDate'])
    console.log('fil.value.startDate = ',)
    let ap: Apartment = fil.value

    let startDate = this.datePipe.transform(fil.value['startDate'], 'yyyy-MM-dd');
    let endDate = this.datePipe.transform(fil.value['endDate'], 'yyyy-MM-dd');

    this.filterService.filterApartment(ap.price, ap.type, startDate, endDate, fil.value['city'], fil.value['rating'])
      .subscribe((data: ApartmentPreview[]) => this.apartmentsPreviews = data);
  }

/*  logFunc(apartmentPreviews: any) {
    console.log("Hi, I'm apartmentPreviews" + apartmentPreviews.id);
    this.router.navigate(['/apartment-details', apartmentPreviews.id])
  }*/

  logFunc(id: any) {
    console.log("Hi, I'm apartmentPreviews" + id);
    this.router.navigate(['/apartment-details', id])
  }

  ngOnInit() {
/*    this.apartmentService.getAllApartmentPage()
      .subscribe((data: Apartment[]) => this.apartments = data);

    console.log("activatedRoute params: ", JSON.stringify(this.activatedRoute.snapshot.params));

    this.apartmentPreviewService.getApartmentPreviewPage()
      .subscribe((data: ApartmentPreview[]) => this.apartmentsPreviews = data);*/

  }


  isImage: boolean = true;
  public getImageApartment(image: any, apartId: any): any{

    if (image) {
      console.log("raster is OK for apart : ", apartId)
    } else if(!image) {
      console.log("raster is null for apart : ", apartId)
    }
    return ("data:image/png;base64," + image);
  }
  displayedColumns: string[] = ['photo', 'hotel', 'type', 'price'];

}
