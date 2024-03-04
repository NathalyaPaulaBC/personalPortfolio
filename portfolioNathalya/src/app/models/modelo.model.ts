import { NameModel } from "./name.model";
import { LocationModel } from "./location.model";
import { LoginModel } from "./login.model";
import { DobModel } from "./dob.model";
import { RegisteredModel } from "./registered.model";
import { IdModel } from "./id.model";
import { PicturesModel } from "./pictures.model";
import { InfoModel } from "./info.model";

export class ModeloModel {
  gender: string;
  name: NameModel;
  location: LocationModel;
  email: string;
  login: LoginModel;
  dob: DobModel;
  registered: RegisteredModel;
  phone: number;
  cell: number;
  id: IdModel;
  pictures: PicturesModel;
  nat: string;

  constructor(p?: any) {
    this.gender = p?.gender ?? null;
    this.name = p?.name ?? new NameModel();
    this.location = p?.location ?? new LocationModel();
    this.email = p?.email ?? null;
    this.login = p?.login ?? new LoginModel();
    this.dob = p?.dob ?? new DobModel();
    this.registered = p?.registered ?? new RegisteredModel();
    this.phone = p?.phone ?? null;
    this.cell = p?.cell ?? null;
    this.id = p?.id ?? new IdModel();
    this.pictures = p?.pictures ?? new PicturesModel();
    this.nat = p?.nat ?? null;
    this.info = p?.info ?? null;
  }

  info: InfoModel;
}
