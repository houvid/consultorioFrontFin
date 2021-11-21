export class Antecedentes {
  id?: number;
  consumo: string;
  medicos: string;
  psicologicos: string;
  psiquiatricos: string;

  constructor(consumo: string, medicos: string, psicologicos: string, psiquiatricos: string) {
    this.consumo = consumo;
    this.medicos = medicos;
    this.psicologicos = psicologicos;
    this.psiquiatricos = psiquiatricos;
  }
}
