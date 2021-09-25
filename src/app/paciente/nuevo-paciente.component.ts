import { Component, OnInit } from '@angular/core';
import {PacienteService} from '../service/paciente.service';
import {Paciente} from '../models/paciente';
import {ToastrService} from 'ngx-toastr';
import {Router} from '@angular/router';


@Component({
  selector: 'app-nuevo-paciente',
  templateUrl: './nuevo-paciente.component.html',
  styleUrls: ['./nuevo-paciente.component.css']
})
export class NuevoPacienteComponent implements OnInit {

  cedula = '';
  nombre = '';
  apellido = '';
  constructor(
    private pacienteService: PacienteService,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const paciente = new Paciente(this.cedula, this.nombre, this.apellido);
    this.pacienteService.save(paciente).subscribe(
      data => {
        this.toastr.success('Paciente creado exitosamente', 'OK', {
          timeOut: 3000
        });
        this.router.navigate(['/lista']);
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Error', {
          timeOut: 3000
        });
        //this.router.navigate(['/']);
      }
      );
  }
}
