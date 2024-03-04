export class InfoModel {
  seed: any;
  results: number;
  page: number;
  version: string

  constructor (p?: any) {
    this.seed = p?.seed ?? null;
    this.results = p?.results ?? null;
    this.page = p?.page ?? null;
    this.version = p?.version ?? null;
  }
}
