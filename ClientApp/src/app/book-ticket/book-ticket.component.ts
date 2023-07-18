import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FlightsService } from '../api/services';
import { FlightModel } from '../api/models';

@Component({
  selector: 'app-book-ticket',
  templateUrl: './book-ticket.component.html',
  styleUrls: ['./book-ticket.component.css'],
})
export class BookTicketComponent implements OnInit {
  flightId: string = 'not loaded';
  flight: FlightModel = {};

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _flightService: FlightsService
  ) {}

  ngOnInit(): void {
    this.flightIdSub();
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

    console.log("Response Error. Status", err.status);
    console.log("Response Error. Status Text", err.statusText);
    console.log(err);
  }

  flightIdSub() {
    this._route.paramMap.subscribe((p) => this.findFlight(p.get('flightId')));
  }
}
