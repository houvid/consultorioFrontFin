import { Component, OnInit } from '@angular/core';
import {PacienteService} from '../service/paciente.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {Paciente} from '../models/paciente';

@Component({
  selector: 'app-detalle-paciente',
  templateUrl: './detalle-paciente.component.html',
  styleUrls: ['./detalle-paciente.component.css']
})
export class DetallePacienteComponent implements OnInit {
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
        this.volver();
      }
    );
  }
  volver(): void{
    this.router.navigate(['/']);
  }

}
