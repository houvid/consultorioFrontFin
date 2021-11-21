import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ListaPacienteComponent} from './paciente/lista-paciente.component';
import {DetallePacienteComponent} from './paciente/detalle-paciente.component';
import {NuevoPacienteComponent} from './paciente/nuevo-paciente.component';
import {EditarPacienteComponent} from './paciente/editar-paciente.component';
import {IndexComponent} from './index/index.component';
import {LoginComponent} from './auth/login.component';
import {RegistroComponent} from './auth/registro.component';
import {ProdGuardService as guard} from './guards/prod-guard.service';
import {HistoriaPacienteComponent} from './historia-paciente/historia-paciente.component';
import {CalendarComponent} from './calendar/calendar.component';

const routes: Routes = [
  {path: '', component: IndexComponent},
  {path: 'login', component: LoginComponent},
  {path: 'registro', component: RegistroComponent},
  {path: 'lista', component: ListaPacienteComponent, canActivate: [guard], data: {expectedRol: ['admin', 'user']}},
  {path: 'calendar', component: CalendarComponent, canActivate: [guard], data: {expectedRol: ['admin', 'user']}},
  {path: 'detalle/:id', component: DetallePacienteComponent, canActivate: [guard], data: {expectedRol: ['admin', 'user']}},
  {path: 'nuevo', component: NuevoPacienteComponent, canActivate: [guard], data: {expectedRol: ['admin', 'user']}},
  {path: 'editar/:id', component: EditarPacienteComponent, canActivate: [guard], data: {expectedRol: ['admin', 'user']}},
  {path: 'registrarHistoria/:id', component: HistoriaPacienteComponent, canActivate: [guard], data: {expectedRol: ['admin', 'user']}},
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
