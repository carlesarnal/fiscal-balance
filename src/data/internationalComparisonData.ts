// Fuentes: OECD Revenue Statistics 2025, Eurostat, EHCI 2018,
// OECD PISA 2022, IMD World Competitiveness 2025,
// Transparency International CPI 2024, World Bank Governance Indicators 2024

export interface PaisComparado {
  pais: string;
  bandera: string;
  presionFiscal: number;
  gastoPubPctPIB: number;
  sanidadEHCI: number;
  educacionPISA: number;
  infraestructura: number;
  corrupcionCPI: number;
  gobiernoRanking: number;
}

export const paisesComparados: PaisComparado[] = [
  {
    pais: 'Dinamarca',
    bandera: '🇩🇰',
    presionFiscal: 44.0,
    gastoPubPctPIB: 48.1,
    sanidadEHCI: 855,
    educacionPISA: 489,
    infraestructura: 88.3,
    corrupcionCPI: 90,
    gobiernoRanking: 5,
  },
  {
    pais: 'Francia',
    bandera: '🇫🇷',
    presionFiscal: 43.9,
    gastoPubPctPIB: 57.2,
    sanidadEHCI: 796,
    educacionPISA: 474,
    infraestructura: 72.0,
    corrupcionCPI: 67,
    gobiernoRanking: 26,
  },
  {
    pais: 'Italia',
    bandera: '🇮🇹',
    presionFiscal: 42.1,
    gastoPubPctPIB: 51.2,
    sanidadEHCI: 695,
    educacionPISA: 471,
    infraestructura: 56.6,
    corrupcionCPI: 54,
    gobiernoRanking: 43,
  },
  {
    pais: 'Suecia',
    bandera: '🇸🇪',
    presionFiscal: 41.3,
    gastoPubPctPIB: 49.9,
    sanidadEHCI: 800,
    educacionPISA: 482,
    infraestructura: 86.0,
    corrupcionCPI: 80,
    gobiernoRanking: 10,
  },
  {
    pais: 'Países Bajos',
    bandera: '🇳🇱',
    presionFiscal: 39.3,
    gastoPubPctPIB: 44.9,
    sanidadEHCI: 883,
    educacionPISA: 493,
    infraestructura: 80.5,
    corrupcionCPI: 78,
    gobiernoRanking: 12,
  },
  {
    pais: 'España',
    bandera: '🇪🇸',
    presionFiscal: 37.3,
    gastoPubPctPIB: 45.3,
    sanidadEHCI: 698,
    educacionPISA: 473,
    infraestructura: 62.2,
    corrupcionCPI: 56,
    gobiernoRanking: 34,
  },
  {
    pais: 'Alemania',
    bandera: '🇩🇪',
    presionFiscal: 37.3,
    gastoPubPctPIB: 50.5,
    sanidadEHCI: 785,
    educacionPISA: 475,
    infraestructura: 77.5,
    corrupcionCPI: 75,
    gobiernoRanking: 18,
  },
  {
    pais: 'Portugal',
    bandera: '🇵🇹',
    presionFiscal: 35.4,
    gastoPubPctPIB: 42.7,
    sanidadEHCI: 754,
    educacionPISA: 472,
    infraestructura: 64.0,
    corrupcionCPI: 57,
    gobiernoRanking: 37,
  },
  {
    pais: 'Reino Unido',
    bandera: '🇬🇧',
    presionFiscal: 34.3,
    gastoPubPctPIB: 44.6,
    sanidadEHCI: 728,
    educacionPISA: 489,
    infraestructura: 70.1,
    corrupcionCPI: 71,
    gobiernoRanking: 30,
  },
];

export const mediaUE = {
  presionFiscal: 40.0,
  gastoPubPctPIB: 49.0,
};
