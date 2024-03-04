export class DobModel {
  date: Date;
  age: number;

  constructor(p?: any) {
    this.date = p?.date ?? null;
    this.age = p?.age ?? null;
  }
}
