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

  apartments: Apartment[] = [];
  details: Details[] = [];
  apartmentsPreviews: ApartmentPreview[]=[];



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
