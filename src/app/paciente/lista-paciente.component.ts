import { Component, OnInit } from '@angular/core';
import {Paciente} from '../models/paciente';
import {PacienteService} from '../service/paciente.service';
import {ToastrService} from 'ngx-toastr';
import {Router} from '@angular/router';
import {TokenService} from '../service/token.service';
import {trigger, style, transition, animate, state} from '@angular/animations';
import {NewEventComponent} from '../calendar/new-event/new-event.component';
import {MatDialog} from '@angular/material/dialog';
import {NuevoPacienteComponent} from './nuevo-paciente.component';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';

const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet; charset=UTF-8';

const EXCEL_EXT = '.xlsx';
@Component({
  selector: 'app-lista-paciente',
  templateUrl: './lista-paciente.component.html',
  styleUrls: ['./lista-paciente.component.css'],
  animations: [
    trigger('enterState', [
      state('void', style({
        transform: 'translateX(-100)',
        opacity: 0
      })),
      transition(':enter', [
        animate(300, style({
          transform: 'translateX(0)',
          opacity: 1
        }))
      ])
    ])
  ]
})
export class ListaPacienteComponent implements OnInit {

  pacientes: Paciente[] = [];
  dataSource: Paciente[] = [];
  isLogged = false;
  usuarioRegistra: string;
  displayedColumns: string[] = [ 'cedula', 'Nombre',  'Celular', 'Municipio', 'Email' , 'Ver', 'Editar', 'NuevaHistoria' , 'NuevaEvolucion'];
  constructor(private pacienteService: PacienteService,
              private toastr: ToastrService,
              private tokenService: TokenService,
              private router: Router,
              public dialog: MatDialog) {
  }

  ngOnInit(): void {
    if (this.tokenService.getToken()){
      this.isLogged = !!this.tokenService.getToken();
      this.usuarioRegistra =  this.tokenService.getUserName();
      this.cargarPacientes();
    }else {
      this.router.navigate(['/login']);
    }
  }

  cargarPacientes(): void {
    this.pacienteService.lista(this.usuarioRegistra).subscribe(
      data => {
        this.dataSource = data;
        console.log(this.dataSource);
      },
      err => {
        console.log(err);
      }
    );
  }

  borrar(id: number) {
    this.pacienteService.delete(id).subscribe(
      data => {
        this.toastr.success('Paciente ELIMINADO exitosamente', 'Se elimin??', {
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

  dialogAsig(): void {
    this.dialog.open(NuevoPacienteComponent, {
      width: '800px',
      height: '800px;',
    });
  }

  exportToExcel(json: any[], excelFileName: string): void {
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(json);
    const workbook: XLSX.WorkBook = {
      Sheets: {dataSource: worksheet},
      SheetNames: ['dataSource']
    };
    const excelBuffer: any = XLSX.write(workbook, {bookType: 'xlsx', type: 'array'});
    this.saveAsExcel(excelBuffer, excelFileName);
  }
  private saveAsExcel(buffer: any, fileName: string): void {
    const data: Blob = new Blob([buffer], {type: EXCEL_TYPE});
    FileSaver.saveAs(data, fileName = '_export_' + new Date().getTime() + EXCEL_EXT);
  }
  exportAsXLSX(){
    console.log((this.dataSource));
    this.exportToExcel( this.dataSource , 'my_export');
  }


}
