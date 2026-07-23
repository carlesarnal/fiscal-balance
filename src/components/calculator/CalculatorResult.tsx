import type { FiscalResult } from '../../types';
import { formatEUR } from '../../utils/formatters';
import InfoTooltip from '../common/InfoTooltip';

interface Props {
  result: FiscalResult;
}

export default function CalculatorResult({ result }: Props) {
  const isPositive = result.saldoFiscalNeto >= 0;

  return (
    <div className="space-y-6">
      {/* Saldo neto */}
      <div className={`rounded-xl p-6 text-center ${isPositive ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`}>
        <p className="text-sm font-medium text-gray-600 mb-1">Saldo fiscal neto anual</p>
        <p className={`text-3xl sm:text-4xl font-bold ${isPositive ? 'text-positive' : 'text-negative'}`}>
          {isPositive ? '+' : ''}{formatEUR(result.saldoFiscalNeto)}
        </p>
        <p className="text-xs text-gray-500 mt-2">
          {isPositive
            ? 'Este hogar aporta más al Estado de lo que recibe en servicios.'
            : 'Este hogar recibe del Estado más de lo que aporta en impuestos y cotizaciones.'}
        </p>
      </div>

      {/* Desglose */}
      <div className="grid sm:grid-cols-2 gap-4">
        {/* Ingresos */}
        <div className="bg-green-50/50 rounded-lg p-4 border border-green-100">
          <h4 className="text-sm font-semibold text-positive mb-3">
            Ingresos para el Estado
          </h4>
          <div className="space-y-2 text-sm">
            <Row label="IRPF" value={result.irpf} />
            <Row label="SS trabajador" value={result.cotizacionTrabajador} />
            <Row
              label="SS empresario"
              value={result.cotizacionEmpresario}
              tooltip="La empresa paga esta cantidad por tener al trabajador contratado. Es ingreso real para el Estado."
            />
            <Row
              label="IVA estimado"
              value={result.ivaEstimado}
              tooltip="Estimación basada en el consumo del hogar (90% de la renta disponible) × tipo IVA efectivo (14%)."
            />
            <div className="border-t border-green-200 pt-2 mt-2">
              <Row label="Total ingresos" value={result.totalIngresos} bold />
            </div>
          </div>
        </div>

        {/* Costes */}
        <div className="bg-red-50/50 rounded-lg p-4 border border-red-100">
          <h4 className="text-sm font-semibold text-negative mb-3">
            Costes para el Estado
          </h4>
          <div className="space-y-2 text-sm">
            <Row label="Sanidad" value={result.costeSanidad} />
            <Row label="Educación" value={result.costeEducacion} />
            <Row
              label="Servicios públicos"
              value={result.costeServiciosPublicos}
              tooltip="Incluye defensa, seguridad, infraestructuras, administración, deuda pública, medio ambiente. ~3.500 €/persona/año."
            />
            {result.costePrestaciones > 0 && (
              <Row label="Prestaciones sociales" value={result.costePrestaciones} />
            )}
            <div className="border-t border-red-200 pt-2 mt-2">
              <Row label="Total costes" value={result.totalCostes} bold />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Row({ label, value, bold, tooltip }: { label: string; value: number; bold?: boolean; tooltip?: string }) {
  return (
    <div className={`flex justify-between ${bold ? 'font-semibold' : ''}`}>
      <span className="text-gray-700">
        {label}
        {tooltip && <InfoTooltip text={tooltip} />}
      </span>
      <span className="text-gray-900">{formatEUR(value)}</span>
    </div>
  );
}
