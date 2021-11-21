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
import { MatSliderModule } from '@angular/material/slider';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HistoriaPacienteComponent } from './historia-paciente/historia-paciente.component';
import { CalendarComponent } from './calendar/calendar.component';
import {FullCalendarModule} from 'primeng/fullcalendar';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { NewEventComponent } from './calendar/new-event/new-event.component';
import {MatInputModule} from '@angular/material/input';




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
    IndexComponent,
    HistoriaPacienteComponent,
    CalendarComponent,
    NewEventComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    HttpClientModule,
    FormsModule,
    MatSliderModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatToolbarModule,
    FullCalendarModule,
    MatGridListModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatInputModule,
  ],
  providers: [interceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
