import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigResponse } from '../app.component';

@Injectable({
  providedIn: 'root',
})
export class PbiService {
  constructor(private httpClient: HttpClient) {}

  /**
   * @returns embed configuration
   */
  getEmbedConfig(endpoint: string): Observable<ConfigResponse> {
    return this.httpClient.get<ConfigResponse>(endpoint);
  }

  postEmbedConfig(endpoint: string, data: any): Observable<ConfigResponse> {
    return this.httpClient.post<ConfigResponse>(endpoint, data);
  }
}
