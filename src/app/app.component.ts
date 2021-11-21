import {Component, OnInit} from '@angular/core';
import {PacienteService} from './service/paciente.service';
import {ToastrService} from 'ngx-toastr';
import {TokenService} from './service/token.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'consultorioFrontFin';
  isLogged = false;
  constructor(private tokenService: TokenService,
              private router: Router) {
  }
  ngOnInit(): void {
    this.isLogged = !!this.tokenService.getToken();
    if (this.tokenService.getToken()){
      this.isLogged = !!this.tokenService.getToken();
    }else {
      this.router.navigate(['/login']);
    }
  }
}
