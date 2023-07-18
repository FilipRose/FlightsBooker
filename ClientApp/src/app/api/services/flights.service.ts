/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';

import { FlightModel } from '../models/flight-model';

@Injectable({ providedIn: 'root' })
export class FlightsService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `searchFlights()` */
  static readonly SearchFlightsPath = '/Flights';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `searchFlights$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  searchFlights$Plain$Response(
    params?: {
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<FlightModel>>> {
    const rb = new RequestBuilder(this.rootUrl, FlightsService.SearchFlightsPath, 'get');
    if (params) {
    }

    return this.http.request(
      rb.build({ responseType: 'text', accept: 'text/plain', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<FlightModel>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `searchFlights$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  searchFlights$Plain(
    params?: {
    },
    context?: HttpContext
  ): Observable<Array<FlightModel>> {
    return this.searchFlights$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<FlightModel>>): Array<FlightModel> => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `searchFlights()` instead.
   *
   * This method doesn't expect any request body.
   */
  searchFlights$Response(
    params?: {
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<FlightModel>>> {
    const rb = new RequestBuilder(this.rootUrl, FlightsService.SearchFlightsPath, 'get');
    if (params) {
    }

    return this.http.request(
      rb.build({ responseType: 'json', accept: 'text/json', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<FlightModel>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `searchFlights$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  searchFlights(
    params?: {
    },
    context?: HttpContext
  ): Observable<Array<FlightModel>> {
    return this.searchFlights$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<FlightModel>>): Array<FlightModel> => r.body)
    );
  }

  /** Path part for operation `findFlights()` */
  static readonly FindFlightsPath = '/Flights/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findFlights$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  findFlights$Plain$Response(
    params: {
      id: string;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<FlightModel>> {
    const rb = new RequestBuilder(this.rootUrl, FlightsService.FindFlightsPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(
      rb.build({ responseType: 'text', accept: 'text/plain', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<FlightModel>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findFlights$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findFlights$Plain(
    params: {
      id: string;
    },
    context?: HttpContext
  ): Observable<FlightModel> {
    return this.findFlights$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<FlightModel>): FlightModel => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findFlights()` instead.
   *
   * This method doesn't expect any request body.
   */
  findFlights$Response(
    params: {
      id: string;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<FlightModel>> {
    const rb = new RequestBuilder(this.rootUrl, FlightsService.FindFlightsPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(
      rb.build({ responseType: 'json', accept: 'text/json', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<FlightModel>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findFlights$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findFlights(
    params: {
      id: string;
    },
    context?: HttpContext
  ): Observable<FlightModel> {
    return this.findFlights$Response(params, context).pipe(
      map((r: StrictHttpResponse<FlightModel>): FlightModel => r.body)
    );
  }

}
