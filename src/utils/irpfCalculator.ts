import { TRAMOS_IRPF, MINIMO_PERSONAL } from '../data/taxBrackets';

export function calcularIRPF(salarioBruto: number): number {
  const baseImponible = Math.max(0, salarioBruto - MINIMO_PERSONAL);
  let cuota = 0;

  for (const tramo of TRAMOS_IRPF) {
    if (baseImponible <= tramo.desde) break;
    const baseEnTramo = Math.min(baseImponible, tramo.hasta) - tramo.desde;
    cuota += baseEnTramo * tramo.tipo;
  }

  return Math.round(cuota * 100) / 100;
}

export function calcularTipoEfectivoIRPF(salarioBruto: number): number {
  if (salarioBruto <= 0) return 0;
  return calcularIRPF(salarioBruto) / salarioBruto;
}
