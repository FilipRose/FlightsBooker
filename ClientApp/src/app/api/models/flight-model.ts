/* tslint:disable */
/* eslint-disable */
import { TimePlaceModel } from './time-place-model';
export interface FlightModel {
  airline?: null | string;
  arrival?: TimePlaceModel;
  departure?: TimePlaceModel;
  id?: string;
  numberOfSeats?: number;
  price?: null | string;
}
