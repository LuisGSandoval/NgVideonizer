import { Component, OnInit } from '@angular/core';
declare var M:any;
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var tabsRegisterOptions = new Object();
    var tabsRegisterElem = document.getElementById("tabs")
    var instance = M.Tabs.init(tabsRegisterElem, tabsRegisterOptions);
  }

}
