import { Component } from '@angular/core';
declare function require(path: string);


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {


  constructor() { }

  headerLogo = require('./assets/images/angular.png');



}
