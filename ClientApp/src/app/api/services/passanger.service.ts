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

import { PassangerDto } from '../models/passanger-dto';
import { PassangerModel } from '../models/passanger-model';

@Injectable({ providedIn: 'root' })
export class PassangerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `registerPassanger()` */
  static readonly RegisterPassangerPath = '/Passanger';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `registerPassanger()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  registerPassanger$Response(
    params?: {
      body?: PassangerDto
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, PassangerService.RegisterPassangerPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(
      rb.build({ responseType: 'text', accept: '*/*', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `registerPassanger$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  registerPassanger(
    params?: {
      body?: PassangerDto
    },
    context?: HttpContext
  ): Observable<void> {
    return this.registerPassanger$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `findPassanger()` */
  static readonly FindPassangerPath = '/Passanger/{email}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findPassanger$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  findPassanger$Plain$Response(
    params: {
      email: string;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<PassangerModel>> {
    const rb = new RequestBuilder(this.rootUrl, PassangerService.FindPassangerPath, 'get');
    if (params) {
      rb.path('email', params.email, {});
    }

    return this.http.request(
      rb.build({ responseType: 'text', accept: 'text/plain', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<PassangerModel>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findPassanger$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findPassanger$Plain(
    params: {
      email: string;
    },
    context?: HttpContext
  ): Observable<PassangerModel> {
    return this.findPassanger$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<PassangerModel>): PassangerModel => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findPassanger()` instead.
   *
   * This method doesn't expect any request body.
   */
  findPassanger$Response(
    params: {
      email: string;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<PassangerModel>> {
    const rb = new RequestBuilder(this.rootUrl, PassangerService.FindPassangerPath, 'get');
    if (params) {
      rb.path('email', params.email, {});
    }

    return this.http.request(
      rb.build({ responseType: 'json', accept: 'text/json', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<PassangerModel>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findPassanger$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findPassanger(
    params: {
      email: string;
    },
    context?: HttpContext
  ): Observable<PassangerModel> {
    return this.findPassanger$Response(params, context).pipe(
      map((r: StrictHttpResponse<PassangerModel>): PassangerModel => r.body)
    );
  }

}
