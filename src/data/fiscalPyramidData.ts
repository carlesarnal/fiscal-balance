// Fuente: Agencia Tributaria (IRPF 2023), INE (Censo 2025), Seguridad Social (2024),
// EPA (T4 2024), SEPE, Ministerio de Educación

export const POBLACION_TOTAL = 49_100_000;

// Quién paga: distribución de declarantes IRPF
export const declarantesIRPF = {
  total: 24_000_000,
  recaudacionTotal: 118_000_000_000,
  tramos: [
    { rango: '< 21.000 €', declarantes: 13_000_000, pctDeclarantes: 54.5, irpfPagado: 8_000_000_000, pctRecaudacion: 6.8, cuotaMedia: 615 },
    { rango: '21.000 – 30.000 €', declarantes: 4_300_000, pctDeclarantes: 18.0, irpfPagado: 16_500_000_000, pctRecaudacion: 14.0, cuotaMedia: 3_761 },
    { rango: '30.000 – 60.000 €', declarantes: 5_300_000, pctDeclarantes: 22.0, irpfPagado: 44_000_000_000, pctRecaudacion: 37.5, cuotaMedia: 8_300 },
    { rango: '60.000 – 150.000 €', declarantes: 1_200_000, pctDeclarantes: 4.9, irpfPagado: 34_000_000_000, pctRecaudacion: 28.8, cuotaMedia: 28_700 },
    { rango: '> 150.000 €', declarantes: 160_000, pctDeclarantes: 0.7, irpfPagado: 15_600_000_000, pctRecaudacion: 13.3, cuotaMedia: 97_500 },
  ],
};

// Seguridad Social
export const seguridadSocial = {
  afiliadosTotal: 21_300_000,
  indefinidos: 14_700_000,
  tiempoCompleto: 9_700_000,
  parcialFijosDiscontinuos: 5_000_000,
  temporales: 2_600_000,
  ratioCotizantesPensionista: 2.44,
};

// Quién no contribuye (neto)
export const noContribuyentes = [
  { grupo: 'Menores de 16 años', cantidad: 7_500_000, icono: '👶' },
  { grupo: 'Pensionistas / jubilados', cantidad: 9_260_000, icono: '🧓' },
  { grupo: 'Desempleados registrados', cantidad: 2_560_000, icono: '📋' },
  { grupo: 'Estudiantes mayores de 16', cantidad: 3_600_000, icono: '🎓' },
  { grupo: 'Labores del hogar', cantidad: 3_400_000, icono: '🏠' },
  { grupo: 'Otros inactivos (incapacidad, etc.)', cantidad: 1_800_000, icono: '🏥' },
];

// Beneficiarios de gasto público
export const beneficiarios = [
  { concepto: 'Sanidad pública (universal)', personas: 49_100_000, costeAnual: 80_000_000_000, detalle: '~2.084 €/persona/año' },
  { concepto: 'Pensiones', personas: 9_260_000, costeAnual: 190_000_000_000, detalle: 'Pensión media: 1.260 €/mes. Nómina mensual: 12.900M €' },
  { concepto: 'Educación pública', personas: 8_300_000, costeAnual: 55_000_000_000, detalle: '67% en centros públicos' },
  { concepto: 'Prestaciones por desempleo', personas: 1_790_000, costeAnual: 24_500_000_000, detalle: 'Media: 1.144 €/mes por beneficiario' },
  { concepto: 'Empleados públicos (salarios)', personas: 3_040_000, costeAnual: 172_400_000_000, detalle: '11% del PIB' },
  { concepto: 'IMV + rentas inserción', personas: 2_000_000, costeAnual: 3_750_000_000, detalle: '665.500 hogares, ~470 €/mes' },
];

// La pirámide resumida
export const piramideFiscal = {
  contribuyentesNetosEstimados: { min: 8_000_000, max: 10_000_000 },
  descripcion: 'Trabajadores a tiempo completo con salario > ~25.000-30.000 € que no son usuarios intensivos de servicios públicos',
  receptoresNetos: { min: 39_000_000, max: 41_000_000 },
  pctContribuyentes: { min: 16, max: 20 },
};

// Datos clave para titulares
export const datosDestacados = [
  { cifra: '5,6%', descripcion: 'de los declarantes (> 60.000 €) pagan el 42% de todo el IRPF' },
  { cifra: '54,5%', descripcion: 'de los declarantes (< 21.000 €) solo aportan el 6,8% del IRPF' },
  { cifra: '160.000', descripcion: 'personas (0,7% de declarantes) aportan el 13,3% del IRPF' },
  { cifra: '2,44', descripcion: 'cotizantes por cada pensionista. En 2008 eran 2,7' },
  { cifra: '~8-10M', descripcion: 'personas (16-20% de la población) son contribuyentes fiscales netos' },
];
