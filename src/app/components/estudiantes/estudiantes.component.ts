import { Component, OnInit } from '@angular/core';
import { ContractService } from '../../services/contract.service';

@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html',
  styleUrls: ['./estudiantes.component.css'],
})
export class EstudiantesComponent implements OnInit {
  public balance: string;
  ageSelected:string;

  constructor(public contract: ContractService) {
    contract.getAccount().then(balance => this.balance = balance )
  }

  ngOnInit() {
  }

  setAgeComponent(){    
    this.contract.setAge(this.ageSelected);
  }
}
