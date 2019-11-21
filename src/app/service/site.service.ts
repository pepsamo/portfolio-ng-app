import { Injectable } from '@angular/core';
import {SiteClass} from "../classes/siteClass";

@Injectable({
  providedIn: 'root'
})
export class SiteService {
    site: SiteClass = {
      title: "Amoruso Front End Developer",
      menulist: [
        "Su di me",
        "Skills",
        "Esperienze lavorative",
        "Progetti",
        "Contatti"
      ],
      links: [
        {gitHub:"https://github.com/pepsamo"},
        {instagram:"https://www.instagram.com/peps_amo/"},
        {linkedin:"https://www.linkedin.com/in/giuseppe-giovanni-amoruso-a36926158/"},
        {mail:"mailto:giuseppegiovanni.amoruso@gmail.com"}
      ]
    };

    getSite() {
      return this.site;
    }

  constructor() { }
}
