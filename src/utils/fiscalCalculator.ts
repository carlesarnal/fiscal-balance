import type { HouseholdInput, FiscalResult } from '../types';
import { calcularIRPF } from './irpfCalculator';
import {
  SS_TRABAJADOR_PCTG,
  SS_EMPRESARIO_PCTG,
  SS_BASE_MAXIMA_ANUAL,
  TASA_AHORRO,
  TIPO_IVA_EFECTIVO,
} from '../data/taxBrackets';
import {
  GASTO_SANIDAD_PER_CAPITA,
  GASTO_EDUCACION_POR_ALUMNO,
  GASTO_SERVICIOS_PUBLICOS_PER_CAPITA,
} from '../data/spendingData';

export function calcularSaldoFiscal(input: HouseholdInput): FiscalResult {
  const salarioTotal = input.salarioBrutoAnual * input.miembrosTrabajando;

  const baseCotizacion = Math.min(salarioTotal, SS_BASE_MAXIMA_ANUAL * input.miembrosTrabajando);

  // Ingresos para el Estado
  const irpf = calcularIRPF(input.salarioBrutoAnual) * input.miembrosTrabajando;
  const cotizacionTrabajador = Math.round(baseCotizacion * SS_TRABAJADOR_PCTG * 100) / 100;
  const cotizacionEmpresario = Math.round(baseCotizacion * SS_EMPRESARIO_PCTG * 100) / 100;

  const rentaDisponible = salarioTotal - irpf - cotizacionTrabajador;
  const consumo = rentaDisponible * (1 - TASA_AHORRO);
  const ivaEstimado = Math.round(consumo * TIPO_IVA_EFECTIVO * 100) / 100;

  const totalIngresos = irpf + cotizacionTrabajador + cotizacionEmpresario + ivaEstimado;

  // Costes para el Estado
  const personasConSanidad = input.usaSanidadPublica ? input.miembrosHogar : 0;
  const costeSanidad = personasConSanidad * GASTO_SANIDAD_PER_CAPITA;
  const costeEducacion = input.hijosEscolarizados * GASTO_EDUCACION_POR_ALUMNO;
  const costeServiciosPublicos = input.miembrosHogar * GASTO_SERVICIOS_PUBLICOS_PER_CAPITA;
  const costePrestaciones = input.recibePrestacioesSociales ? input.importePrestaciones : 0;

  const totalCostes = costeSanidad + costeEducacion + costeServiciosPublicos + costePrestaciones;

  const saldoFiscalNeto = Math.round((totalIngresos - totalCostes) * 100) / 100;

  return {
    irpf,
    cotizacionTrabajador,
    cotizacionEmpresario,
    ivaEstimado,
    totalIngresos: Math.round(totalIngresos * 100) / 100,
    costeSanidad,
    costeEducacion,
    costeServiciosPublicos,
    costePrestaciones,
    totalCostes,
    saldoFiscalNeto,
  };
}
