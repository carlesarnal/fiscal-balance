import type { DatoNacionalidad } from '../types';
import { getColor } from './chartColors';

// Fuente: INE - Encuesta Anual de Estructura Salarial (EAES) 2022/2023
// Salario bruto medio anual por nacionalidad
// Nota: los datos del INE distinguen entre "española", "UE" y "resto del mundo".
// Las cifras por país concreto son estimaciones basadas en EAES + EPA + Decil de salarios.
export const salaryData: DatoNacionalidad[] = [
  { nacionalidad: 'Estadounidense', valor: 32000, color: getColor('Estadounidense') },
  { nacionalidad: 'Española', valor: 28360, color: getColor('Española') },
  { nacionalidad: 'Alemana', valor: 26800, color: getColor('Alemana') },
  { nacionalidad: 'Francesa', valor: 25500, color: getColor('Francesa') },
  { nacionalidad: 'Británica', valor: 25000, color: getColor('Británica') },
  { nacionalidad: 'Italiana', valor: 24200, color: getColor('Italiana') },
  { nacionalidad: 'Argentina', valor: 21500, color: getColor('Argentina') },
  { nacionalidad: 'Rumana', valor: 20800, color: getColor('Rumana') },
  { nacionalidad: 'Portuguesa', valor: 20500, color: getColor('Portuguesa') },
  { nacionalidad: 'Colombiana', valor: 19200, color: getColor('Colombiana') },
  { nacionalidad: 'Peruana', valor: 19200, color: getColor('Peruana') },
  { nacionalidad: 'Ecuatoriana', valor: 18800, color: getColor('Ecuatoriana') },
  { nacionalidad: 'Marroquí', valor: 18500, color: getColor('Marroquí') },
  { nacionalidad: 'Ucraniana', valor: 18200, color: getColor('Ucraniana') },
  { nacionalidad: 'Venezolana', valor: 17800, color: getColor('Venezolana') },
  { nacionalidad: 'Boliviana', valor: 17500, color: getColor('Boliviana') },
  { nacionalidad: 'Hondureña', valor: 17200, color: getColor('Hondureña') },
  { nacionalidad: 'China', valor: 16500, color: getColor('China') },
].sort((a, b) => b.valor - a.valor);
