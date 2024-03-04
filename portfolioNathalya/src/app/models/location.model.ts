import { CoordinatesModel } from "./coordinates.model";
import { StreetModel } from "./street.model";
import { TimezoneModel } from "./timezone.model";

export class LocationModel {
  street: StreetModel;
  city: string;
  state: string;
  country: string;
  postcode: number;
  coordinates: CoordinatesModel;
  timezone: TimezoneModel;

  constructor(p?: any) {
    this.street = p?.street ?? new StreetModel();
    this.city = p?.city ?? null;
    this.state = p?.state ?? null;
    this.country = p?.country ?? null;
    this.postcode = p?.postcode ?? null;
    this.coordinates = p?.coordinates ?? new CoordinatesModel();
    this.timezone = p?.timezone ?? new TimezoneModel();
  }
}
