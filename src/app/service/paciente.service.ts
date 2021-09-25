import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Paciente} from '../models/paciente';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  pacienteURL = 'http://localhost:8080/paciente/';

  constructor(private  httpClient: HttpClient) {}

    public lista(): Observable<Paciente[]>{
      return this.httpClient.get<Paciente[]>(this.pacienteURL + 'lista');
    }

    public detalle(id: number): Observable<Paciente>{
    return this.httpClient.get<Paciente>(this.pacienteURL + `detalle/${id}`);
    }

    public detalleCedula(cedula: string): Observable<Paciente>{
    return this.httpClient.get<Paciente>(this.pacienteURL + `detalle/cedula/${cedula}`);
    }

    public save(paciente: Paciente): Observable<any>{
    return this.httpClient.post<any>(this.pacienteURL + 'crear', paciente);
    }

  public update(id: number , paciente: Paciente): Observable<any>{
    return this.httpClient.put<any>(this.pacienteURL + `update/${id}`, paciente);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.pacienteURL + `delete/${id}`);
  }


}
