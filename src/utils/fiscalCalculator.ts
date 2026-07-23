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
  const pensionAnual = input.pensionAnual ?? 0;
  const pensionTributa = input.pensionTributaEnEspana ?? true;

  const baseCotizacion = Math.min(salarioTotal, SS_BASE_MAXIMA_ANUAL * input.miembrosTrabajando);

  // IRPF: sobre salarios + pensión (si tributa en España)
  const irpfSalarios = calcularIRPF(input.salarioBrutoAnual) * input.miembrosTrabajando;
  const irpfPension = pensionTributa ? calcularIRPF(pensionAnual) : 0;
  const irpf = irpfSalarios + irpfPension;

  // SS: solo sobre salarios (pensiones no cotizan)
  const cotizacionTrabajador = Math.round(baseCotizacion * SS_TRABAJADOR_PCTG * 100) / 100;
  const cotizacionEmpresario = Math.round(baseCotizacion * SS_EMPRESARIO_PCTG * 100) / 100;

  // IVA: sobre el consumo de toda la renta disponible (salarios + pensión)
  const rentaDisponibleSalarios = salarioTotal - irpfSalarios - cotizacionTrabajador;
  const rentaDisponiblePension = pensionAnual - irpfPension;
  const rentaDisponible = rentaDisponibleSalarios + rentaDisponiblePension;
  const consumo = Math.max(0, rentaDisponible) * (1 - TASA_AHORRO);
  const ivaEstimado = Math.round(consumo * TIPO_IVA_EFECTIVO * 100) / 100;

  const totalIngresos = irpf + cotizacionTrabajador + cotizacionEmpresario + ivaEstimado;

  // Costes para el Estado
  const personasConSanidad = input.usaSanidadPublica ? input.miembrosHogar : 0;
  const costeSanidad = personasConSanidad * GASTO_SANIDAD_PER_CAPITA;
  const costeEducacion = input.hijosEscolarizados * GASTO_EDUCACION_POR_ALUMNO;
  const costeServiciosPublicos = input.miembrosHogar * GASTO_SERVICIOS_PUBLICOS_PER_CAPITA;
  const costePrestaciones = input.recibePrestacioesSociales ? input.importePrestaciones : 0;
  // Si es jubilado español, la pensión es un coste para el Estado
  const costePension = (pensionTributa && pensionAnual > 0) ? pensionAnual : 0;

  const totalCostes = costeSanidad + costeEducacion + costeServiciosPublicos + costePrestaciones + costePension;

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
    costePrestaciones: costePrestaciones + costePension,
    totalCostes,
    saldoFiscalNeto,
  };
}
