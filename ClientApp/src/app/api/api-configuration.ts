import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiConfiguration {
  rootUrl: string = 'https://localhost:7256';
}

export interface ApiConfigurationParams {
  rootUrl?: string;
}
