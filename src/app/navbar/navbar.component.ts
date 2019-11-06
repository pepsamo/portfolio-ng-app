import { Component, OnInit } from '@angular/core';
import { Site } from '../Interfaces/site';
import site from '../../Mockups/site.json';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss',
              '../../style/_mixins.scss']
})
export class NavbarComponent implements OnInit, Site {

  constructor() { }

  ngOnInit() {
  }
  siteComponent: siteComponent = site;
}
