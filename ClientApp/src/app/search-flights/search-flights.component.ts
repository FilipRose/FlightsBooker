import { Component, OnInit } from '@angular/core';
import { FlightsService } from '../api/services';
import { FlightModel } from '../api/models';

@Component({
  selector: 'app-search-flights',
  templateUrl: './search-flights.component.html',
  styleUrls: ['./search-flights.component.css']
})
export class SearchFlightsComponent implements OnInit {

  searchResult: FlightModel[] = [];

  constructor(private readonly _flightService: FlightsService) {}

  ngOnInit(): void {
    
  }

  search() {
    this._flightService.searchFlights({})
    .subscribe(response => this.searchResult = response, 
      this.handleError
      )
  }

  private handleError(err: any) {
    console.log("Response Error. Status", err.status)
    console.log("Response Error. Status Text", err.statusText)
    console.log(err);
  }
}
