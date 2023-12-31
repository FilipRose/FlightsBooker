import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, } from '@angular/router';
import { FlightsService } from '../api/services';
import { BookDto, FlightModel } from '../api/models';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-book-ticket',
  templateUrl: './book-ticket.component.html',
  styleUrls: ['./book-ticket.component.css'],
})
export class BookTicketComponent implements OnInit {
  flightId: string = 'not loaded';
  flight: FlightModel = {};

  formFlight = this._formBuilder.group({
    number: [1]
  })

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _flightService: FlightsService,
    private _authService: AuthService,
    private _formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.flightIdSub();
    this.isNotRegister();
  }

  private isNotRegister() {
    if(!this._authService.currentUser) {
      this._router.navigate(['/register']);
    }
  }

  private findFlight = (flightId: string | null) => {
    this.flightId = flightId ?? 'not passed';

    this._flightService.findFlights({id: this.flightId })
    .subscribe(flight => this.flight = flight, this.handleError)
  }

  private handleError = (err: any) => {

    if(err.status == 404) {
      alert("Flight not found!");
      this._router.navigate(['/search-flights']);
    }

    if(err.status == 400) {
      alert("400 Bad Request to the server!");
      this._router.navigate(['/search-flights']);
    }
  }

  flightIdSub() {
    this._route.paramMap.subscribe((p) => this.findFlight(p.get('flightId')));
  }

  bookFlight(): void {
   const booking: BookDto  = {
    flightId : this.flight.id,
    passengerEamil: this._authService.currentUser?.email,
    numberOfSeats: this.formFlight.get('number')?.value as number
   }
   this._flightService.bookFlights({body: booking})
   .subscribe( _ => (this._router.navigate(['/book-list']), this.handleError));
  }
}
