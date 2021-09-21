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

  apartmentsPreviews: ApartmentPreview[]=[];


  constructor(private filterService: FilterService,
              private datePipe: DatePipe,
              private router: Router) {
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

  logFunc(id: any) {
    console.log("Hi, I'm apartmentPreviews" + id);
    this.router.navigate(['/apartment-details', id])
  }

  ngOnInit() {
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
