import {Site} from "../Interfaces/site";

export class SiteClass implements Site {
  title: string;
  menulist: string[];
  links: {}[];
}