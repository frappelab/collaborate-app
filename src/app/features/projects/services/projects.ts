import { inject, Injectable } from '@angular/core';
import { Session } from '../../../shared/services/session';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {

  private _sessionService = inject(Session);
  private http = inject(HttpClient);
  private readonly API_URL = 'https://collaborate-ook5.onrender.com/api/v1';

  getProjects() {
    const token = this._sessionService.getToken();
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    })

    return this.http.get(`${this.API_URL}/projects`, { headers });

  }

}
