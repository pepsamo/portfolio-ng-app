import { Component, OnInit } from '@angular/core';
import { Site } from '../Interfaces/site';
import site from '../../Mockups/site.json';
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeSquare } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss',
              '../../style/_mixins.scss',
              ]
})
export class NavbarComponent implements OnInit, Site {

  constructor() { }

  ngOnInit() {
  }
  siteComponent= site;
  faGithub = faGithub;
  faInstagram = faInstagram;
  faLinkedin = faLinkedin;
  faGmail = faEnvelopeSquare;
}
