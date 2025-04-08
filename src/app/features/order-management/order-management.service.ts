import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OrderManagementService {
  private apiUrl = 'https://do-an-be-v64w.onrender.com/orders';

  constructor(private http: HttpClient) {}

  getOrder(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
