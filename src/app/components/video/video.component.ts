import { Component, OnInit } from '@angular/core';
declare var M:any;
@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {
  videoPrice : number = 0.03;
  constructor() { }

  ngOnInit() {
    var ModalOptions = new Object();
    var modalElems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(modalElems, ModalOptions);
  }
  Modaltrigger(){

  }

}
