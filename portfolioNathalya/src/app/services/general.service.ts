import { Injectable } from '@angular/core';
import { HttpServiceClient } from './http.service';
import { Observable } from 'rxjs';
import { ModeloModel } from '../models/modelo.model';

@Injectable({
	providedIn: 'root'
})
export class GeneralService {
	constructor(
		private httpService: HttpServiceClient
	) { }

	getModels(): Observable<Array<ModeloModel>> {
		return this.httpService.doGet('');
	}
}
