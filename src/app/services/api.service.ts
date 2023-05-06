import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient
  ) { }

  baseUrl: string = environment.baseApiUrl;

  fetch(path: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${path}`);
  }

  post(path: string, payload: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/${path}`, payload);
  }
  
}
