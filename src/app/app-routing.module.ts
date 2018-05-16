import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { EstudiantesComponent } from './components/estudiantes/estudiantes.component';
import { ProfesoresComponent } from './components/profesores/profesores.component';
import { VideoComponent } from './components/video/video.component';
import { PagarContratoComponent } from './components/pagar-contrato/pagar-contrato.component';

const routes: Routes = [
  {path: 'estudiantes', component: EstudiantesComponent},
  {path: 'profesores', component: ProfesoresComponent},
  {path: 'videos', component: VideoComponent},
  {path: 'pagar', component: PagarContratoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
