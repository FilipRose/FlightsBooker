import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchFlightsComponent } from './search-flights/search-flights.component';
import { BookTicketComponent } from './book-ticket/book-ticket.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  {path: '', component: SearchFlightsComponent, pathMatch: 'full' },
  {path: 'search-flights', component: SearchFlightsComponent},
  {path: 'book-ticket/:flightId', component: BookTicketComponent, pathMatch: 'full' },
  {path: 'register', component: RegistrationComponent}
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
