import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { EstudiantesComponent } from './components/estudiantes/estudiantes.component';
import { ProfesoresComponent } from './components/profesores/profesores.component';
import { VideoComponent } from './components/video/video.component';
import { PagarContratoComponent } from './components/pagar-contrato/pagar-contrato.component';
import { RegistroComponent } from './components/registro/registro.component';

const routes: Routes = [
  {path: 'student', component: EstudiantesComponent},
  {path: 'teacher', component: ProfesoresComponent},
  {path: 'video', component: VideoComponent},
  {path: 'payEveryOne', component: PagarContratoComponent},
  {path: 'register', component: RegistroComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
