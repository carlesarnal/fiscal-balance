// Fuente: AIReF, INE (Proyecciones de Población 2024-2074), Banco de España,
// European Commission Ageing Report 2024, CaixaBank Research, Instituto Santalucía

export interface DataPoint {
  anio: number;
  valor: number;
}

export const ratioHistorico: DataPoint[] = [
  { anio: 2000, valor: 2.20 },
  { anio: 2005, valor: 2.50 },
  { anio: 2007, valor: 2.71 },
  { anio: 2008, valor: 2.65 },
  { anio: 2010, valor: 2.50 },
  { anio: 2015, valor: 2.25 },
  { anio: 2020, valor: 2.30 },
  { anio: 2024, valor: 2.44 },
];

export const ratioConInmigracion: DataPoint[] = [
  { anio: 2024, valor: 2.44 },
  { anio: 2025, valor: 2.40 },
  { anio: 2030, valor: 2.25 },
  { anio: 2035, valor: 1.95 },
  { anio: 2040, valor: 1.75 },
  { anio: 2045, valor: 1.55 },
  { anio: 2050, valor: 1.47 },
];

export const ratioSinInmigracion: DataPoint[] = [
  { anio: 2024, valor: 2.44 },
  { anio: 2025, valor: 2.25 },
  { anio: 2030, valor: 1.75 },
  { anio: 2035, valor: 1.45 },
  { anio: 2040, valor: 1.20 },
  { anio: 2045, valor: 1.00 },
  { anio: 2050, valor: 0.97 },
];

export const pensionistas = {
  actual: { anio: 2024, millones: 9.2, pensiones: 10.4 },
  proyectado2040: { anio: 2040, millones: 13, pensiones: 14 },
  proyectado2050: { anio: 2050, millones: 15, pensiones: 16.7 },
};

export const datosProyeccion = {
  ratioMaximoHistorico: { valor: 2.71, anio: 2007 },
  ratioActual: { valor: 2.44, anio: 2024 },
  ratioProyectado2050ConInmigracion: { valor: 1.47, anio: 2050 },
  ratioProyectado2050SinInmigracion: { valor: 0.97, anio: 2050 },
  inmigrantesNecesariosAnuales: 665000,
  pctGastoPensionesActual: 12.7,
  pctGastoPensiones2050: 15.3,
  generacionBabyBoom: '1958-1975',
  picoJubilaciones: '2035-2045',
};

// Datos combinados para el gráfico
export const chartData = (() => {
  const years = [2000, 2005, 2007, 2008, 2010, 2015, 2020, 2024, 2025, 2030, 2035, 2040, 2045, 2050];
  return years.map((anio) => {
    const hist = ratioHistorico.find((d) => d.anio === anio);
    const con = ratioConInmigracion.find((d) => d.anio === anio);
    const sin = ratioSinInmigracion.find((d) => d.anio === anio);
    return {
      anio,
      historico: hist?.valor ?? null,
      conInmigracion: anio >= 2024 ? (con?.valor ?? null) : null,
      sinInmigracion: anio >= 2024 ? (sin?.valor ?? null) : null,
    };
  });
})();
