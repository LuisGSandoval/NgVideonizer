import { Component, OnInit } from '@angular/core';
import { ContractService } from '../../services/contract.service';
// declare var M:any;
@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html',
  styleUrls: ['./estudiantes.component.css'],
})
export class EstudiantesComponent implements OnInit {
  public balance: string;
  ageSelected:string;


  // StudentName : string;
  // StudentLastName : string;


  constructor(public contract: ContractService) {
    // contract.getAccount().then(balance => this.balance = balance )
  }

  ngOnInit() {
  }

  // setAgeComponent(){    
  //   this.contract.setAge(this.ageSelected);
  // }

  // thanks4registering(){
  //   if(this.StudentLastName != null && this.StudentLastName != null){
  //     M.toast({html: 'Gracias por registrarte'})
  //     this.StudentLastName = "";
  //     this.StudentName = "";
  //   }else{
  //     M.toast({html: 'Por favor llena los campos'})
  //   }
  // }
}
