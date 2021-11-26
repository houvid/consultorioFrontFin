import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListasService {

  constructor(private http: HttpClient) { }
  async obtenerMunicipiosDane(): Promise<Observable<any>> {
    // https://www.datos.gov.co/resource/xdk5-pm3f.json?departamento=Antioquia
    return null;

  }
}
