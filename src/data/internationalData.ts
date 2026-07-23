import type { ComparacionInternacional } from '../types';

// Fuentes: estudios internacionales sobre impacto fiscal de la inmigración
export const internationalData: ComparacionInternacional[] = [
  {
    pais: 'Países Bajos (marroquí)',
    impactoFiscalNeto: -542000,
    unidad: 'EUR (coste neto vida)',
    fuente: 'Van de Beek et al., IZA DP 17569',
    anio: 2024,
    notas: 'Coste fiscal neto a lo largo de toda la vida de un inmigrante de origen marroquí. Los inmigrantes laborales tienen saldo positivo.',
  },
  {
    pais: 'Países Bajos (no occidental)',
    impactoFiscalNeto: -300000,
    unidad: 'EUR (coste neto vida)',
    fuente: 'Van de Beek et al., IZA DP 17569',
    anio: 2024,
    notas: 'Coste neto medio de un inmigrante no occidental a lo largo de toda la vida.',
  },
  {
    pais: 'Dinamarca (no occidental)',
    impactoFiscalNeto: -11500,
    unidad: 'EUR/persona/año',
    fuente: 'Finansministeriet / Gerdes & Wadensjö',
    anio: 2018,
    notas: '85.000 DKK/persona/año. Los inmigrantes occidentales tienen saldo positivo.',
  },
  {
    pais: 'OCDE (promedio)',
    impactoFiscalNeto: 0,
    unidad: '% del PIB',
    fuente: 'OECD International Migration Outlook 2025',
    anio: 2025,
    notas: 'El impacto fiscal neto oscila entre -1% y +1% del PIB en países OCDE. El dato varía enormemente según cualificación.',
  },
  {
    pais: 'España (Banco de España)',
    impactoFiscalNeto: 0.55,
    unidad: 'pp crecimiento PIB pc',
    fuente: 'Banco de España, Boletín Económico 2025/T2',
    anio: 2025,
    notas: 'Contribución estimada de la inmigración al crecimiento del PIB per cápita (0,4-0,7 pp). NO es saldo fiscal neto.',
  },
];

// Datos para gráfico comparativo simplificado (coste/beneficio anual per cápita)
export const comparacionAnualPerCapita = [
  { pais: 'Dinamarca (no occidental)', valorAnual: -11500, color: '#dc2626' },
  { pais: 'Países Bajos (no occidental)', valorAnual: -7500, color: '#f97316' },
  { pais: 'OCDE (promedio inmigrante)', valorAnual: 0, color: '#64748b' },
  { pais: 'Dinamarca (occidental)', valorAnual: 3200, color: '#16a34a' },
  { pais: 'Países Bajos (laboral)', valorAnual: 5800, color: '#1e40af' },
];
