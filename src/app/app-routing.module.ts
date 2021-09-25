import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ListaPacienteComponent} from './paciente/lista-paciente.component';
import {DetallePacienteComponent} from './paciente/detalle-paciente.component';
import {NuevoPacienteComponent} from './paciente/nuevo-paciente.component';
import {EditarPacienteComponent} from './paciente/editar-paciente.component';
import {IndexComponent} from './index/index.component';
import {LoginComponent} from './auth/login.component';
import {RegistroComponent} from './auth/registro.component';


const routes: Routes = [
  {path: '', component: IndexComponent},
  {path: 'login', component: LoginComponent},
  {path: 'registro', component: RegistroComponent},
  {path: 'lista', component: ListaPacienteComponent},
  {path: 'detalle/:id', component: DetallePacienteComponent},
  {path: 'nuevo', component: NuevoPacienteComponent},
  {path: 'editar/:id', component: EditarPacienteComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
