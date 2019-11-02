import { Component, OnInit } from '@angular/core';
import site from '../../Mockups/site.json';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss',
              '../../style/_mixins.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  siteComponent: string = site;
}
