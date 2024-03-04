export class TimezoneModel {
  offset: Date;
  description: string;

  constructor(p?: any) {
    this.offset = p?.offset ?? null;
    this.description = p?.description ?? null;
  }
}
