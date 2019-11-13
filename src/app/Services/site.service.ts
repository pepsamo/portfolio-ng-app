import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
// import { siteJson } from '../../Mockups/site.json';
import { Site } from '../Interfaces/site.js';

@Injectable({
  providedIn: 'root'
})
export class SiteService  {

  constructor(private http: HttpClient) {
    this.getSite().subscribe(data =>
       console.log(data)
      )
   }
  public getSite(): Observable<any> {
    return of(this.http.get('../../Mockups/site.json'));
  }
}
