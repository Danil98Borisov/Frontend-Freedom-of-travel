import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';


import {DeleteHotelComponent} from "./components/delete/delete-hotel.component";
import {ApartmentComponent} from "./components/apartment/apartment.component";
import {AddHotelComponent} from 'src/app/components/add-hotel/add-hotel.component';
import {ReservationComponent} from 'src/app/components/reservation/reservation.component';
import {HotelComponent} from 'src/app/components/hotel/hotel.component';
import {EditHotelComponent} from 'src/app/components/edit-hotel/edit-hotel.component';
import {FilterComponent} from 'src/app/components/filter/filter.component';
import { DetailsComponent } from 'src/app/components/details/details.component';
import {FilterHotelComponent} from "./components/filter-hotel/filter-hotel.component";
import {DetailsHotelComponent} from "./components/details-hotel/details-hotel.component";
import {LoginComponent} from "./components/login/login.component";
import {RegisterComponent} from "./components/register/register.component";
import {NotFoundComponent} from "./components/errors/not-found.component";
import {UserBookingComponent} from "./components/user-booking/user-booking.component";

const routes: Routes = [
  {path: '', component: FilterComponent},
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
  {path: 'filter-hotel', component: FilterHotelComponent},
  {path: 'register', component: RegisterComponent},
  {path: '404', component: NotFoundComponent},
  {path: 'user/booking', component: UserBookingComponent},
  {path: '**',component: NotFoundComponent}
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
