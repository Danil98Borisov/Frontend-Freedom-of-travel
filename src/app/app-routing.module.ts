import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';


import {DeleteHotelComponent} from "../delete/delete-hotel.component";
import {ApartmentComponent} from "../apartment/apartment.component";
import {AddHotelComponent} from 'src/add-hotel/add-hotel.component';
import {ReservationComponent} from 'src/reservation/reservation.component';
import {HotelComponent} from 'src/hotel/hotel.component';
import {EditHotelComponent} from 'src/edit-hotel/edit-hotel.component';
import {FilterComponent} from 'src/filter/filter.component';
import { DetailsComponent } from 'src/details/details.component';
import {HomeComponent} from "../home/home.component";
import {FilterHotelComponent} from "../filter-hotel/filter-hotel.component";
import {DetailsHotelComponent} from "../details-hotel/details-hotel.component";
import {LoginComponent} from "../login/login.component";

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'delete', component: DeleteHotelComponent},
  {path: 'apartment-details/:id', component: DetailsComponent},
  {path: 'hotel-details/:id', component: DetailsHotelComponent},
  {path: 'apartment', component: ApartmentComponent},
  {path: 'hotel/add', component: AddHotelComponent},
  {path: 'reservation', component: ReservationComponent},
  {path: 'hotel', component: HotelComponent},
  {path: 'hotel/edit', component: EditHotelComponent},
  {path: 'filter', component: FilterComponent},
  {path: 'filter-hotel', component: FilterHotelComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule {
}
