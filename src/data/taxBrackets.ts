import type { TramoIRPF } from '../types';

export const TRAMOS_IRPF: TramoIRPF[] = [
  { desde: 0, hasta: 12450, tipo: 0.19 },
  { desde: 12450, hasta: 20200, tipo: 0.24 },
  { desde: 20200, hasta: 35200, tipo: 0.30 },
  { desde: 35200, hasta: 60000, tipo: 0.37 },
  { desde: 60000, hasta: 300000, tipo: 0.45 },
  { desde: 300000, hasta: Infinity, tipo: 0.47 },
];

export const MINIMO_PERSONAL = 5550;

// Seguridad Social
export const SS_TRABAJADOR_PCTG = 0.065;
export const SS_EMPRESARIO_PCTG = 0.3065;
export const SS_BASE_MAXIMA_ANUAL = 61214.40;

// IVA estimación
export const TASA_AHORRO = 0.10;
export const TIPO_IVA_EFECTIVO = 0.14;
