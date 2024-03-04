export class NameModel {
  title: string;
  first: string;
  last: string;

  constructor (p?: any) {
    this.title = p?.title ?? null;
    this.first = p?.first ?? null;
    this.last = p?.last ?? null;
  }
}
