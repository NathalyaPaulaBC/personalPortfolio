export class CoordinatesModel {
  latitude: number;
  longitude: number;

  constructor(p?: any) {
    this.latitude = p?.latitude ?? null;
    this.longitude = p?.longitude ?? null;
  }
}
