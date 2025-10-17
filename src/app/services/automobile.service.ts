import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AutomobileService {
  constructor(private http: HttpClient) {}

  getAutomobili(): Observable<any> {
    return this.http.get('assets/DBAutomobili.json');
  }
}
