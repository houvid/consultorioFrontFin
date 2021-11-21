export class Historia {
  id?: number;
  antecedenteMedicoPac?: string;
  antecedenteConsumoPac?: string;
  antecedentePsicologico?: string;
  antecedentePsiquiatrico?: string;
  antecedenteMedicoFam?: string;
  antecedenteConsumoFam?: string;
  antecedentePsicologicoFam?: string;
  antecedentePsiquiatricoFam?: string;
  motivoDeConsulta?: string;
  diagnostico?: string;

  constructor(antecedenteMedicoPac: string, antecedenteConsumoPac: string, antecedentePsicologico: string, antecedentePsiquiatrico: string, antecedenteMedicoFam: string, antecedenteConsumoFam: string, antecedentePsicologicoFam: string, antecedentePsiquiatricoFam: string, motivoDeConsulta: string, diagnostico: string) {
    this.antecedenteMedicoPac = antecedenteMedicoPac;
    this.antecedenteConsumoPac = antecedenteConsumoPac;
    this.antecedentePsicologico = antecedentePsicologico;
    this.antecedentePsiquiatrico = antecedentePsiquiatrico;
    this.antecedenteMedicoFam = antecedenteMedicoFam;
    this.antecedenteConsumoFam = antecedenteConsumoFam;
    this.antecedentePsicologicoFam = antecedentePsicologicoFam;
    this.antecedentePsiquiatricoFam = antecedentePsiquiatricoFam;
    this.motivoDeConsulta = motivoDeConsulta;
    this.diagnostico = diagnostico;
  }
}
