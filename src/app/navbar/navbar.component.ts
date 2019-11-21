import { Component, OnInit } from '@angular/core';
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeSquare } from "@fortawesome/free-solid-svg-icons";
import {SiteService} from "../service/site.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss',
              '../../style/_mixins.scss',
              '../../style/_animations.scss'
              ]
})
export class NavbarComponent implements OnInit {

  constructor(private siteService: SiteService) { }

  ngOnInit() {
    this.siteService.getSite();
  }
  faGithub = faGithub;
  faInstagram = faInstagram;
  faLinkedin = faLinkedin;
  faGmail = faEnvelopeSquare;
}
