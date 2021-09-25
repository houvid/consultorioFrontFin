import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { ListaPacienteComponent } from './paciente/lista-paciente.component';
import { DetallePacienteComponent } from './paciente/detalle-paciente.component';
import { NuevoPacienteComponent } from './paciente/nuevo-paciente.component';
import { EditarPacienteComponent } from './paciente/editar-paciente.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './auth/login.component';
import { RegistroComponent } from './auth/registro.component';
import { MenuComponent } from './menu/menu.component';
import { IndexComponent } from './index/index.component';
import {interceptorProvider, ProdInterceptorService} from './interceptors/prod-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    ListaPacienteComponent,
    DetallePacienteComponent,
    NuevoPacienteComponent,
    EditarPacienteComponent,
    LoginComponent,
    RegistroComponent,
    MenuComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    HttpClientModule,
    FormsModule
  ],
  providers: [interceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
