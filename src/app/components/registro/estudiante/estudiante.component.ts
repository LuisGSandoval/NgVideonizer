import { Component, OnInit } from '@angular/core';
declare var M:any;
@Component({
  selector: 'app-estudiante',
  templateUrl: './estudiante.component.html',
  styleUrls: ['./estudiante.component.css']
})
export class EstudianteComponent implements OnInit {
  StudentName : string;
  StudentLastName : string;
  constructor() { }

  ngOnInit() {
  }

  
  thanks4registering(){
    if(this.StudentLastName != null && this.StudentName != null){
      M.toast({html: 'Gracias por registrarte'})
      this.StudentLastName = "";
      this.StudentName = "";
    }else{
      M.toast({html: 'Por favor llena los campos'})
    }
  }

}
