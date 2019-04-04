import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export interface Config {
  
}

export class ConfigService {
  configUrl = 'assets/config.json';
  constructor(private http: HttpClient) { }

  getConfig(filename: string) {
    return this.http.get(filename, {responseType: 'text'})
    .pipe(
      tap(
        data => this.log(filename, data),
        error => this.logError(filename, error)
      )
    );
  }
}
