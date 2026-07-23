// Fuente: Ministerio de Sanidad (EGSP 2024), Ministerio de Educación (2023),
// IGAE - Presupuestos Generales del Estado

export const GASTO_SANIDAD_PER_CAPITA = 2084;
export const GASTO_EDUCACION_POR_ALUMNO = 8293;
export const GASTO_SERVICIOS_PUBLICOS_PER_CAPITA = 3500;

// Desglose del gasto en servicios públicos generales (per cápita, estimación)
export const detalleServiciosPublicos = [
  { concepto: 'Defensa', importe: 300 },
  { concepto: 'Orden público y seguridad', importe: 520 },
  { concepto: 'Infraestructuras y transporte', importe: 450 },
  { concepto: 'Administración general', importe: 600 },
  { concepto: 'Servicio de la deuda (per cápita)', importe: 700 },
  { concepto: 'Protección medioambiental', importe: 230 },
  { concepto: 'Vivienda y servicios comunitarios', importe: 200 },
  { concepto: 'Cultura y ocio', importe: 300 },
  { concepto: 'Otros', importe: 200 },
];

export const resumenGastoPublico = [
  { concepto: 'Sanidad', importePerCapita: GASTO_SANIDAD_PER_CAPITA, fuente: 'Ministerio de Sanidad, EGSP 2024' },
  { concepto: 'Educación (por alumno)', importePerCapita: GASTO_EDUCACION_POR_ALUMNO, fuente: 'Ministerio de Educación, 2023' },
  { concepto: 'Servicios públicos generales', importePerCapita: GASTO_SERVICIOS_PUBLICOS_PER_CAPITA, fuente: 'IGAE, estimación 2024' },
];
