import { Component, OnInit } from '@angular/core';
declare var M:any;
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var sideNavOptions = new Object();
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, sideNavOptions);
  }

}
