export class IdModel {
  name: any;
  value: null;

  constructor(p?: any) {
    this.name = p?.name ?? null;
    this.value = p?.value ?? null;
  }
}
