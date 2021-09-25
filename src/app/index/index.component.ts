import { Component, OnInit } from '@angular/core';
import {TokenService} from '../service/token.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  userName: string;
  isLogged: boolean;
  constructor(private tokenService: TokenService, private router: Router) { }

  ngOnInit(): void {
    if (this.tokenService.getToken()){
      this.userName = this.tokenService.getUserName();
      this.isLogged = !!this.tokenService.getToken();
    }else {
      this.router.navigate(['/login']);
    }

  }

}
