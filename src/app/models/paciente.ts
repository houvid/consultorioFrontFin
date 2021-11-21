import {Antecedentes} from './antecedentes';

export class Paciente {
  id?: number;
  cedula: string;
  nombre: string;
  apellido: string;
  sexo: string;
  nivelEscolaridad: string;
  ocupacion: string;
  institucion: string;
  fechaNacimiento: Date;
  lugarNacimiento: string;
  direccion: string;
  municipio: string;
  telefono: string;
  celular: string;
  emai: string;
  estadoCivil: string;
  estrato: string;
  tarifa: number;
  nombreAcudiente: string;
  edadAcudiente: string;
  telefonoAcudiente: string;
  celularAcudiente: string;
  direccionAcudiente: string;
  usuarioRegistra: string;
  antecedentes?: Antecedentes[];
  constructor(cedula: string,
              nombre: string,
              apellido: string,
              sexo: string,
              nivelEscolaridad: string,
              ocupacion: string,
              institucion: string,
              fechaNacimiento: Date,
              lugarNacimiento: string,
              direccion: string,
              municipio: string,
              telefono: string,
              celular: string,
              emai: string,
              estadoCivil: string,
              estrato: string,
              tarifa: number,
              nombreAcudiente: string,
              edadAcudiente: string,
              telefonoAcudiente: string,
              celularAcudiente: string,
              direccionAcudiente: string,
              usuarioRegistra: string) {
    this.cedula = cedula;
    this.nombre = nombre;
    this.apellido = apellido;
    this.sexo = sexo;
    this.nivelEscolaridad = nivelEscolaridad;
    this.ocupacion = ocupacion;
    this.institucion = institucion;
    this.fechaNacimiento = fechaNacimiento;
    this.lugarNacimiento = lugarNacimiento;
    this.direccion = direccion;
    this.municipio = municipio;
    this.telefono = telefono;
    this.celular = celular;
    this.emai = emai;
    this.estadoCivil = estadoCivil;
    this.estrato = estrato;
    this.tarifa = tarifa;
    this.nombreAcudiente = nombreAcudiente;
    this.edadAcudiente = edadAcudiente;
    this.telefonoAcudiente = telefonoAcudiente;
    this.celularAcudiente = celularAcudiente;
    this.direccionAcudiente = direccionAcudiente;
    this.usuarioRegistra = usuarioRegistra;
  }
}


