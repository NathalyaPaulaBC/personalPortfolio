export class StreetModel {
  number: number;
  name: string;

  constructor(p?: any) {
    this.number = p?.number ?? null;
    this.name = p?.name ?? null;
  }
}
