import { Component, OnInit } from '@angular/core';
declare var M:any;
@Component({
  selector: 'app-profesor',
  templateUrl: './profesor.component.html',
  styleUrls: ['./profesor.component.css']
})
export class ProfesorComponent implements OnInit {

  TeachersName : string;
  TeachersLastName : string;
  videoDetail : string;
  hashVideo : string;


  constructor() { }

  ngOnInit() {
  }

  thanks4registering(){
    if(this.TeachersLastName != null && this.TeachersName != null && this.videoDetail != null && this.hashVideo != null){
      M.toast({html: 'Gracias por registrarte'})
      this.TeachersLastName = "";
      this.TeachersName = "";
      this.videoDetail = "";
      this.hashVideo = "";
    }else{
      M.toast({html: 'Por favor llena los campos'})
    }
  }

}
