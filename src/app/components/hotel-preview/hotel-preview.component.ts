import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {HotelPreviewService} from "./hotel-preview.service";
import {HotelPreview} from "../models/hotelPreview";


@Component({
  selector: 'app-hotel-preview',
  template: "",
  providers: [HotelPreviewService]
})
export class HotelPreviewComponent implements OnInit {

  isImage: boolean = true;

  hotelPreviews: HotelPreview[]=[];


  constructor(private activatedRoute: ActivatedRoute,
              private hotelPreviewService: HotelPreviewService,
              private router:Router
  ) {
  }

  ngOnInit() {
    console.log("HotelPreviewComponent is opened, apart id = " + this.activatedRoute.snapshot.params.id);

    this.hotelPreviewService.getHotelPreviewPage()
     .subscribe((data: HotelPreview[]) => this.hotelPreviews = data);
  }

  getImageHotel(image: any): any{
    if (this.isImage) {
      console.log("image: ", image)
      return "data:image/png;base64," + image;

    } else {
      this.isImage = false;
    }
  }

}
