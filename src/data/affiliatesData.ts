import type { DatoNacionalidad } from '../types';
import { getColor } from './chartColors';

// Fuente: Seguridad Social - Afiliación de extranjeros, 2024
// Número de afiliados medios en alta laboral por nacionalidad
export const affiliatesData: DatoNacionalidad[] = [
  { nacionalidad: 'Marroquí', valor: 422000, color: getColor('Marroquí') },
  { nacionalidad: 'Rumana', valor: 343000, color: getColor('Rumana') },
  { nacionalidad: 'Colombiana', valor: 264000, color: getColor('Colombiana') },
  { nacionalidad: 'Argentina', valor: 175000, color: getColor('Argentina') },
  { nacionalidad: 'Italiana', valor: 150000, color: getColor('Italiana') },
  { nacionalidad: 'Venezolana', valor: 148000, color: getColor('Venezolana') },
  { nacionalidad: 'Peruana', valor: 130000, color: getColor('Peruana') },
  { nacionalidad: 'Hondureña', valor: 124000, color: getColor('Hondureña') },
  { nacionalidad: 'Ecuatoriana', valor: 112000, color: getColor('Ecuatoriana') },
  { nacionalidad: 'China', valor: 108000, color: getColor('China') },
  { nacionalidad: 'Francesa', valor: 95000, color: getColor('Francesa') },
  { nacionalidad: 'Boliviana', valor: 95000, color: getColor('Boliviana') },
  { nacionalidad: 'Ucraniana', valor: 75000, color: getColor('Ucraniana') },
  { nacionalidad: 'Británica', valor: 65000, color: getColor('Británica') },
  { nacionalidad: 'Portuguesa', valor: 65000, color: getColor('Portuguesa') },
  { nacionalidad: 'Alemana', valor: 58000, color: getColor('Alemana') },
  { nacionalidad: 'Estadounidense', valor: 15000, color: getColor('Estadounidense') },
].sort((a, b) => b.valor - a.valor);
