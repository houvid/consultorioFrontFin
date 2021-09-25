export class Paciente {
  id?: number;
  cedula: string;
  nombre: string;
  apellido: string;

  constructor(cedula: string , nombre: string, apellido: string){
    this.cedula = cedula;
    this.nombre = nombre;
    this.apellido = apellido;
  }
}


