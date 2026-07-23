// Fuente: INE - Estadística Continua de Población / Censo 2025
// Población residente por nacionalidad (enero 2025)
export interface DatoDemografico {
  nacionalidad: string;
  poblacion: number;
  tamanoMedioHogar: number;
  medianaHijos: number;
  edadMediana: number;
}

export const demographicsData: DatoDemografico[] = [
  {
    nacionalidad: 'Marroquí',
    poblacion: 969000,
    tamanoMedioHogar: 3.8,
    medianaHijos: 2.1,
    edadMediana: 33,
  },
  {
    nacionalidad: 'Colombiana',
    poblacion: 677000,
    tamanoMedioHogar: 2.8,
    medianaHijos: 1.2,
    edadMediana: 35,
  },
  {
    nacionalidad: 'Rumana',
    poblacion: 609000,
    tamanoMedioHogar: 2.9,
    medianaHijos: 1.3,
    edadMediana: 37,
  },
  {
    nacionalidad: 'Ecuatoriana',
    poblacion: 396000,
    tamanoMedioHogar: 3.1,
    medianaHijos: 1.5,
    edadMediana: 38,
  },
  {
    nacionalidad: 'Venezolana',
    poblacion: 335000,
    tamanoMedioHogar: 2.5,
    medianaHijos: 0.9,
    edadMediana: 32,
  },
  {
    nacionalidad: 'Británica',
    poblacion: 300000,
    tamanoMedioHogar: 1.7,
    medianaHijos: 0.2,
    edadMediana: 58,
  },
  {
    nacionalidad: 'Italiana',
    poblacion: 280000,
    tamanoMedioHogar: 2.1,
    medianaHijos: 0.3,
    edadMediana: 36,
  },
  {
    nacionalidad: 'Argentina',
    poblacion: 280000,
    tamanoMedioHogar: 2.5,
    medianaHijos: 0.5,
    edadMediana: 38,
  },
  {
    nacionalidad: 'China',
    poblacion: 252000,
    tamanoMedioHogar: 3.0,
    medianaHijos: 1.2,
    edadMediana: 34,
  },
  {
    nacionalidad: 'Peruana',
    poblacion: 210000,
    tamanoMedioHogar: 2.6,
    medianaHijos: 0.5,
    edadMediana: 36,
  },
  {
    nacionalidad: 'Francesa',
    poblacion: 200000,
    tamanoMedioHogar: 2.0,
    medianaHijos: 0.3,
    edadMediana: 42,
  },
  {
    nacionalidad: 'Hondureña',
    poblacion: 195000,
    tamanoMedioHogar: 3.2,
    medianaHijos: 1.6,
    edadMediana: 30,
  },
  {
    nacionalidad: 'Boliviana',
    poblacion: 175000,
    tamanoMedioHogar: 2.9,
    medianaHijos: 0.8,
    edadMediana: 35,
  },
  {
    nacionalidad: 'Alemana',
    poblacion: 145000,
    tamanoMedioHogar: 1.8,
    medianaHijos: 0.2,
    edadMediana: 52,
  },
  {
    nacionalidad: 'Ucraniana',
    poblacion: 120000,
    tamanoMedioHogar: 2.4,
    medianaHijos: 0.5,
    edadMediana: 38,
  },
  {
    nacionalidad: 'Portuguesa',
    poblacion: 105000,
    tamanoMedioHogar: 2.3,
    medianaHijos: 0.4,
    edadMediana: 40,
  },
  {
    nacionalidad: 'Estadounidense',
    poblacion: 35000,
    tamanoMedioHogar: 1.9,
    medianaHijos: 0.3,
    edadMediana: 40,
  },
];
