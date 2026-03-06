import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InitService {
  
  config: any;
  private http = inject(HttpClient);

  init(){
    return this.http
      .get('./assets/config.json')
      .pipe(tap((config) => (this.config = config)))
  }
}
