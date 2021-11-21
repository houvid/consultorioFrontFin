import { Component, OnInit } from '@angular/core';
import {Paciente} from '../models/paciente';
import {PacienteService} from '../service/paciente.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {Historia} from '../models/historia';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-historia-paciente',
  templateUrl: './historia-paciente.component.html',
  styleUrls: ['./historia-paciente.component.css'],
  providers: [DatePipe]
})
export class HistoriaPacienteComponent implements OnInit {

  antecedenteMedicoPac: '';
  antecedenteConsumoPac: '';
  antecedentePsicologico: '';
  antecedentePsiquiatrico: '';
  antecedenteMedicoFam: '';
  antecedenteConsumoFam: '';
  antecedentePsicologicoFam: '';
  antecedentePsiquiatricoFam: '';
  motivoDeConsulta: '';
  diagnostico: '';
  paciente: Paciente = null;
  constructor(
    private pacienteService: PacienteService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router,
    private datePipe: DatePipe
  ) {
  }

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

  onRegister(): void {
    const id = this.activatedRoute.snapshot.params.id;
    const historia = new Historia(this.antecedenteMedicoPac,
      this.antecedenteConsumoPac,
      this.antecedentePsicologico,
      this.antecedentePsiquiatrico,
      this.antecedenteMedicoFam,
      this.antecedenteConsumoFam,
      this.antecedentePsicologicoFam,
      this.antecedentePsiquiatricoFam,
      this.motivoDeConsulta,
      this.diagnostico );
    this.pacienteService.registroHistoria(id, historia).subscribe(
      data => {
        this.toastr.success('Registro de historia okey', 'OK', {
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
