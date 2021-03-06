import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';


import {DeleteHotelComponent} from "./components/delete/delete-hotel.component";
import {ApartmentComponent} from "./components/apartment/apartment.component";
import {AddHotelComponent} from 'src/app/components/add-hotel/add-hotel.component';
import {ReservationComponent} from 'src/app/components/reservation/reservation.component';
import {HotelComponent} from 'src/app/components/hotel/hotel.component';
import {EditHotelComponent} from 'src/app/components/edit-hotel/edit-hotel.component';
import {ApartmentSearchComponent} from 'src/app/components/apartment-search/apartment-search.component';
import { DetailsComponent } from 'src/app/components/details/details.component';
import {FilterHotelComponent} from "./components/filter-hotel/filter-hotel.component";
import {DetailsHotelComponent} from "./components/details-hotel/details-hotel.component";
import {LoginComponent} from "./components/login/login.component";
import {RegisterComponent} from "./components/register/register.component";
import {NotFoundComponent} from "./components/errors/not-found.component";
import {UserBookingComponent} from "./components/user-booking/user-booking.component";
import {HotelManagementComponent} from "./components/hotel-management/hotel-management.component";
import {VerificationErrorComponent} from "./components/verification-error/verification-error.component";
import {UserManagerComponent} from "./components/user-manager/user-manager.component";


const routes: Routes = [
  {path: '', component: ApartmentSearchComponent},
  {path: 'login', component: LoginComponent},
  {path: 'delete', component: DeleteHotelComponent},
  {path: 'apartment-details/:id', component: DetailsComponent},
  {path: 'hotel-details/:id', component: DetailsHotelComponent},
  {path: 'apartment', component: ApartmentComponent},
  {path: 'hotel/add', component: AddHotelComponent},
  {path: 'reservation', component: ReservationComponent},
  {path: 'hotel/all', component: HotelComponent},
  {path: 'hotel/edit', component: EditHotelComponent},
  {path: 'filter', component: ApartmentSearchComponent},
  {path: 'filter-hotel', component: FilterHotelComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'user/booking', component: UserBookingComponent},
  {path: 'user/manage', component: UserManagerComponent},
  {path: 'hotel/manage-hotel', component: HotelManagementComponent},
  {path: '404', component: NotFoundComponent},
  {path: 'verification-error', component: VerificationErrorComponent},
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
