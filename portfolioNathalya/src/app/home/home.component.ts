import { Component, OnInit } from '@angular/core';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faCalendarDay } from '@fortawesome/free-solid-svg-icons';
import { faMap } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { GeneralService } from '../services/general.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  tipo: string = 'PA';
  faUser = faUser;
  faEnvelope = faEnvelope;
  faCalendarDay = faCalendarDay;
  faMap = faMap;
  faPhone = faPhone;
  faLock = faLock;
  gs: GeneralService;
  result: any;

  constructor(
    generalServices: GeneralService
  ) {
    this.gs = generalServices;
   }

  ngOnInit(): void {
    this.getModels();
  }

  setValue(value: string) {
    this.tipo = value;
    console.log('Oi', this.tipo)
  }

  getModels() {
    this.gs.getModels().subscribe((data: any) => {
      console.log(data);
      this.result = data.results;
    });
  }
}
