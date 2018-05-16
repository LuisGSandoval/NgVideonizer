import { Component, OnInit } from '@angular/core';
import { ContractService } from '../../services/contract.service';

@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html',
  styleUrls: ['./estudiantes.component.css'],
  providers: [ContractService]
})
export class EstudiantesComponent implements OnInit {
  public balance: number;

  constructor(contract: ContractService) {
    contract.getUserBalance().then(balance => this.balance = balance )
   }

  ngOnInit() {
  }

  // crearEstudiante(){
  //   contract.getAccount().then(balance => this.balance = balance )
  // }

}
