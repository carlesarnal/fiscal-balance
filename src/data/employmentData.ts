import type { DatoNacionalidad } from '../types';
import { getColor } from './chartColors';

// Fuente: INE - Encuesta de Población Activa (EPA), 2024
// Tasa de empleo por nacionalidad (% de población en edad de trabajar que está ocupada)
// Nota: las tasas bajas de británicos, alemanes y franceses reflejan la alta proporción
// de jubilados residentes en España (Costa del Sol, Costa Blanca, Baleares).
export const employmentData: DatoNacionalidad[] = [
  { nacionalidad: 'Argentina', valor: 72, color: getColor('Argentina') },
  { nacionalidad: 'Rumana', valor: 72, color: getColor('Rumana') },
  { nacionalidad: 'Peruana', valor: 71, color: getColor('Peruana') },
  { nacionalidad: 'Portuguesa', valor: 70, color: getColor('Portuguesa') },
  { nacionalidad: 'Ucraniana', valor: 70, color: getColor('Ucraniana') },
  { nacionalidad: 'Italiana', valor: 68, color: getColor('Italiana') },
  { nacionalidad: 'Colombiana', valor: 68, color: getColor('Colombiana') },
  { nacionalidad: 'Boliviana', valor: 68, color: getColor('Boliviana') },
  { nacionalidad: 'Hondureña', valor: 65, color: getColor('Hondureña') },
  { nacionalidad: 'Española', valor: 65, color: getColor('Española') },
  { nacionalidad: 'Ecuatoriana', valor: 64, color: getColor('Ecuatoriana') },
  { nacionalidad: 'Francesa', valor: 62, color: getColor('Francesa') },
  { nacionalidad: 'Estadounidense', valor: 60, color: getColor('Estadounidense') },
  { nacionalidad: 'Venezolana', valor: 58, color: getColor('Venezolana') },
  { nacionalidad: 'Alemana', valor: 55, color: getColor('Alemana') },
  { nacionalidad: 'China', valor: 55, color: getColor('China') },
  { nacionalidad: 'Marroquí', valor: 52, color: getColor('Marroquí') },
  { nacionalidad: 'Británica', valor: 45, color: getColor('Británica') },
].sort((a, b) => b.valor - a.valor);

export const TASA_EMPLEO_ESPANOLA = 65;
