import { Component, OnInit } from '@angular/core';
import {PacienteService} from '../service/paciente.service';
import {Paciente} from '../models/paciente';
import {ToastrService} from 'ngx-toastr';
import {Router} from '@angular/router';
import {TokenService} from '../service/token.service';


@Component({
  selector: 'app-nuevo-paciente',
  templateUrl: './nuevo-paciente.component.html',
  styleUrls: ['./nuevo-paciente.component.css']
})
export class NuevoPacienteComponent implements OnInit {

  cedula = '';
  nombre = '';
  apellido = '';
  sexo: '';
  nivelEscolaridad: any;
  ocupacion: '';
  institucion: '';
  fechaNacimiento: any;
  lugarNacimiento: '';
  direccion: '';
  municipio: '';
  telefono: '';
  celular: '';
  emai: '';
  estadoCivil: '';
  estrato: '';
  tarifa: 0;
  nombreAcudiente: '';
  edadAcudiente: '';
  telefonoAcudiente: '';
  celularAcudiente: '';
  direccionAcudiente: '';
  usuarioRegistra: string;
  isLogged: boolean;
  constructor(
    private pacienteService: PacienteService,
    private toastr: ToastrService,
    private router: Router,
    private tokenService: TokenService,
  ) { }

  ngOnInit(): void {
    if (this.tokenService.getToken()){
      this.isLogged = !!this.tokenService.getToken();
      this.usuarioRegistra =  this.tokenService.getUserName();
    }else {
      this.router.navigate(['/login']);
    }
  }

  onCreate(): void {
    const paciente = new Paciente(this.cedula,
      this.nombre,
      this.apellido,
      this.sexo,
      this.nivelEscolaridad,
      this.ocupacion,
      this.institucion,
      this.fechaNacimiento,
      this.lugarNacimiento,
      this.direccion,
      this.municipio,
      this.telefono,
      this.celular,
      this.emai,
      this.estadoCivil,
      this.estrato,
      this.tarifa,
      this.nombreAcudiente,
      this.edadAcudiente,
      this.telefonoAcudiente,
      this.celularAcudiente,
      this.direccionAcudiente,
      this.usuarioRegistra);
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
