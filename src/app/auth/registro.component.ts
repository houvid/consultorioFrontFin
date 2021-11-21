import { Component, OnInit } from '@angular/core';
import {TokenService} from '../service/token.service';
import {AuthService} from '../service/auth.service';
import {Router} from '@angular/router';
import {LoginUsuario} from '../models/login-usuario';
import {NuevoUsuario} from '../models/nuevo-usuario';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  isRegister = false;
  isLogged = false;
  isLoginFail = false;
  isRegisterFail = false;
  nuevoUsuario: NuevoUsuario;
  nombre: string;
  email: string;
  nombreUsuario: string;
  password: string;
  errMsj: string;
  constructor(
    private tokenService: TokenService,
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    if (this.tokenService.getToken()){
      this.isLogged = true;
    }
  }

  onRegister(): void {
    this.nuevoUsuario = new NuevoUsuario(this.nombre, this.email , this.nombreUsuario, this.password);
    this.authService.nuevo(this.nuevoUsuario).subscribe(
      data => {
        this.isRegister = true;
        this.isLoginFail = false;
        this.toastr.success('Cuenta Creada Exitosamente', 'OK', {
          timeOut: 3000
        });
        this.router.navigate(['/login']);
      },
      err => {
        this.isRegister = false;
        this.isRegisterFail = true;
        this.errMsj = 'Error al crear el usuario';
        this.toastr.error(err.error.mensaje, 'Error al crear el usuario', {
          timeOut: 3000});
        console.log(this.errMsj);
      }
    );
  }

}
