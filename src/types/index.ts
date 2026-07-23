export interface HouseholdInput {
  salarioBrutoAnual: number;
  miembrosHogar: number;
  miembrosTrabajando: number;
  hijosEscolarizados: number;
  usaSanidadPublica: boolean;
  recibePrestacioesSociales: boolean;
  importePrestaciones: number;
  pensionAnual?: number;
  pensionTributaEnEspana?: boolean;
}

export interface FiscalResult {
  irpf: number;
  cotizacionTrabajador: number;
  cotizacionEmpresario: number;
  ivaEstimado: number;
  totalIngresos: number;

  costeSanidad: number;
  costeEducacion: number;
  costeServiciosPublicos: number;
  costePrestaciones: number;
  totalCostes: number;

  saldoFiscalNeto: number;
}

export interface TramoIRPF {
  desde: number;
  hasta: number;
  tipo: number;
}

export interface DatoNacionalidad {
  nacionalidad: string;
  valor: number;
  color: string;
}

export interface PerfilPredefinido {
  id: string;
  nombre: string;
  descripcion: string;
  input: HouseholdInput;
}

export interface ComparacionInternacional {
  pais: string;
  impactoFiscalNeto: number;
  unidad: string;
  fuente: string;
  anio: number;
  notas: string;
}

export interface FuenteDatos {
  nombre: string;
  institucion: string;
  url: string;
  descripcion: string;
  fechaAcceso: string;
  archivoLocal?: string;
}
