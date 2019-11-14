import { Injectable } from '@angular/core';
import * as sectionJson from '../../Mockups/section.json';

@Injectable({
  providedIn: 'root'
})
export class SectionService {

  constructor() { }
  getSection() {
    return sectionJson;
  }
}
