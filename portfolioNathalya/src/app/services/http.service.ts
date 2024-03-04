import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map, finalize } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable()
export class HttpServiceClient {
	constructor(
		private http: HttpClient,

	) { }

	private endPointApi() {
		return "https://randomuser.me/api";
	}

	getHeaders() {
		const headers = new HttpHeaders();
		headers.append('Content-Type', 'application/json');
		headers.append('Access-Control-Allow-Origin', '*');
		return headers;
	}

	handleResponse(observable: Observable<any>) {
		return observable.pipe(
			map((response: Response) => {
				return response as any;
			}),
            catchError(error => {
				throw(error)
			}),
			finalize(() => {
				// this.offloading();
			})
        );
	}

	parseParams(params: any): any {
		let httpParams = new HttpParams();
		Object.keys(params)
		.filter(key => {
			const dataParam = params[key];
			return (Array.isArray(dataParam) || typeof dataParam === 'string') ? (dataParam.length > 0) :
			(dataParam !== null && dataParam !== undefined);
		})
		.forEach(key => {

				httpParams = httpParams.set(key, params[key]);

		});
		return httpParams;
	}

	doGet(path: string, filterParams?: any) {
		// this.isloading();
		const url = this.endPointApi() + path;
		if (filterParams) {
			return this.handleResponse(this.http.get(url, { headers: this.getHeaders(),
				params: this.parseParams(filterParams) }));
		} else {
			return this.handleResponse(this.http.get(url, { headers: this.getHeaders()}));
		}
	}

	doPost(path: string, body: any, filterParams?: any) {
		// this.isloading();
		const url = this.endPointApi() + path;
		if (filterParams) {
			return this.handleResponse(this.http.post(url, body, { headers: this.getHeaders(),
				params: this.parseParams(filterParams)  }));
		} else {
			return this.handleResponse(this.http.post(url,  body, { headers: this.getHeaders()}));
		}
	}

	doPut(path: string, body: any, filterParams?: any) {
		// this.isloading();
		const url = this.endPointApi() + path;
		if (filterParams) {
			return this.handleResponse(this.http.put(url, body, { headers: this.getHeaders(),
				params: this.parseParams(filterParams)  }));
		} else {
			return this.handleResponse(this.http.put(url,  body, { headers: this.getHeaders()}));
		}
	}

	doDelete(path: string, id: Number, filterParams?: any) {
		// this.isloading();
		const url = this.endPointApi() + path + '/' + id;
		return this.handleResponse(this.http.delete(url, { headers: this.getHeaders() }));
	}
}
