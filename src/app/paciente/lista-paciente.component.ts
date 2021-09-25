import { Component, OnInit } from '@angular/core';
import {Paciente} from '../models/paciente';
import {PacienteService} from '../service/paciente.service';
import {ToastrService} from 'ngx-toastr';
import {Router} from '@angular/router';

@Component({
  selector: 'app-lista-paciente',
  templateUrl: './lista-paciente.component.html',
  styleUrls: ['./lista-paciente.component.css']
})
export class ListaPacienteComponent implements OnInit {

  pacientes: Paciente[] = [];

  constructor(private pacienteService: PacienteService,
              private toastr: ToastrService) {
  }

  ngOnInit(): void {
    this.cargarPacientes();
  }

  cargarPacientes(): void {
    this.pacienteService.lista().subscribe(
      data => {
        this.pacientes = data;
        console.log(this.pacientes);
      },
      err => {
        console.log(err);
      }
    );
  }

  borrar(id: number) {
    this.pacienteService.delete(id).subscribe(
      data => {
        this.toastr.success('Paciente ELIMINADO exitosamente', 'Se eliminó', {
          timeOut: 3000
        });
        this.cargarPacientes();
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Error', {
          timeOut: 3000
        });
      }
    );
  }
}
