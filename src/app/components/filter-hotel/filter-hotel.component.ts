import {ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import {FilterHotelService} from './filter-hotel.service';
import {FormControl, FormGroup} from '@angular/forms';
import {HotelPreview} from "../models/hotelPreview";
import {HotelService} from "../hotel/hotel.service";
import {HotelPreviewService} from "../hotel-preview/hotel-preview.service";
import {Router} from "@angular/router";
import {DetailsHotelComponent} from "../details-hotel/details-hotel.component";
import {DetailsHotelService} from "../details-hotel/details-hotel.service";
import {MatPaginator, PageEvent} from "@angular/material/paginator";
import {DatePipe} from "@angular/common";
import {AuthService} from "../../services/auth.service";
import {MatTableDataSource} from "@angular/material/table";
import {Observable} from "rxjs";

@Component({
  selector: 'app-filter-hotel',
  templateUrl: 'filter-hotel.component.html',
  styleUrls: ['filter-hotel.component.css'],
  providers: [FilterHotelService,HotelService, DetailsHotelComponent, DetailsHotelService, HotelPreviewService]
})
export class FilterHotelComponent implements OnInit {

  // @ts-ignore
  @ViewChild(MatPaginator) paginator: MatPaginator;
  // @ts-ignore
  hotelPreviews: Observable<HotelPreview[]>;
  dataSource: MatTableDataSource<HotelPreview> = new MatTableDataSource<HotelPreview>([]);
  hotelsPreviews: HotelPreview[]=[];

  isDataLoaded = false;

  // MatPaginator Inputs
  length = 30;
  pageSize = 5;

  // MatPaginator Output
  pageEvent: PageEvent[]=[];


  fil = new FormGroup({
    startDate: new FormControl(),
    endDate: new FormControl(),
    price: new FormControl(),
    city: new FormControl(),
    rating: new FormControl(),
    type: new FormControl()
  });

  isLogin : boolean = false;

  constructor(private filterHotelService: FilterHotelService,
              private router: Router,
              private datePipe: DatePipe,
              private authService: AuthService,
              private changeDetectorRef: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.authService.currentIsLogIn.subscribe(isLogin => this.isLogin = isLogin);
    if(this.isLogin){
      this.reloadPage();
    }
  }

  ngOnDestroy() {
    if (this.dataSource) {
      this.dataSource.disconnect();
    }
  }

  public filter(fil: FormGroup, page: number): void {
    /*    console.log('fil.value.startDate = ', fil.value.startDate)
        console.log('fil.value.startDate = ')*/

    let startDate = this.datePipe.transform(fil.value.startDate, 'yyyy-MM-dd');
    let endDate = this.datePipe.transform(fil.value.endDate, 'yyyy-MM-dd');
    let sort ="DESC"

    this.filterHotelService.filterHotel(fil.value.price, fil.value.type, startDate, endDate, fil.value.city, fil.value.rating, sort, page)
      .subscribe((data: HotelPreview[]) => {
        this.hotelsPreviews = data;
        this.isDataLoaded = true;
        this.changeDetectorRef.detectChanges();
        this.dataSource = new MatTableDataSource<HotelPreview>(this.hotelsPreviews);
        this.dataSource.paginator = this.paginator;
        this.hotelPreviews = this.dataSource.connect();
      });
  }

  public filterAsc(fil: FormGroup,page: number): void {
    /*    console.log('fil.value.startDate = ', fil.value.startDate)
        console.log('fil.value.startDate = ')*/

    let startDate = this.datePipe.transform(fil.value.startDate, 'yyyy-MM-dd');
    let endDate = this.datePipe.transform(fil.value.endDate, 'yyyy-MM-dd');
    let sort = "ASC";

    this.filterHotelService.filterHotel(fil.value.price, fil.value.type, startDate, endDate, fil.value.city, fil.value.rating, sort, page)
      .subscribe((data: HotelPreview[]) => {
        this.hotelsPreviews = data;
        this.isDataLoaded = true;
        this.changeDetectorRef.detectChanges();
        this.dataSource = new MatTableDataSource<HotelPreview>(this.hotelsPreviews);
        this.dataSource.paginator = this.paginator;
        this.hotelPreviews = this.dataSource.connect();
      });
  }

  logFuncHotel(id: any) {
    console.log("Hi, I'm hotelPreviews" + id);
    this.router.navigate(['/hotel-details', id])
  }

  reloadPage(): void {
    window.location.reload();
  }

  public getImageHotel(image: any): any{
    return ("data:image/png;base64," + image);
  }

  displayedColumns: string[] = ['photo', 'Name', 'city', 'rating','description'];
}
