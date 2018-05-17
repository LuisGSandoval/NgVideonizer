import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ContractService } from './services/contract.service'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { EstudiantesComponent } from './components/estudiantes/estudiantes.component';
import { ProfesoresComponent } from './components/profesores/profesores.component';
import { VideoComponent } from './components/video/video.component';
import { PagarContratoComponent } from './components/pagar-contrato/pagar-contrato.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    EstudiantesComponent,
    ProfesoresComponent,
    VideoComponent,
    PagarContratoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ContractService],
  bootstrap: [AppComponent]
})
export class AppModule { }
