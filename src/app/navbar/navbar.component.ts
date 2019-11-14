import { Component, OnInit } from '@angular/core';
import { Site } from '../Interfaces/site';
import { SiteService } from '../Services/site.service';
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeSquare } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss',
              '../../style/_mixins.scss',
              ]
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // this.siteService.getSite().subscribe(
    //   data => console.log(data)
    // );
  }
  siteComponent;
  faGithub = faGithub;
  faInstagram = faInstagram;
  faLinkedin = faLinkedin;
  faGmail = faEnvelopeSquare;

}
