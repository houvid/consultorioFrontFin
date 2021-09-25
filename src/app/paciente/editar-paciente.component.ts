import { Component, OnInit } from '@angular/core';
import {Paciente} from '../models/paciente';
import {PacienteService} from '../service/paciente.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-editar-paciente',
  templateUrl: './editar-paciente.component.html',
  styleUrls: ['./editar-paciente.component.css']
})
export class EditarPacienteComponent implements OnInit {

  paciente: Paciente = null;
  constructor(
    private pacienteService: PacienteService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params.id;
    this.pacienteService.detalle(id).subscribe(
      data => {
        this.paciente = data;
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Error', {
          timeOut: 3000
        });
        this.router.navigate(['/lista']);
      }
    );
  }

  onUpdate(): void {
    const id = this.activatedRoute.snapshot.params.id;
    this.pacienteService.update(id, this.paciente).subscribe(
      data => {
        this.toastr.success('Paciente actualizado exitosamente', 'OK', {
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
