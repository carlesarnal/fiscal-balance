import { presetProfiles } from '../../data/presetProfiles';
import { calcularSaldoFiscal } from '../../utils/fiscalCalculator';
import { formatEUR } from '../../utils/formatters';

const results = presetProfiles
  .filter((p) => p.input.salarioBrutoAnual > 0)
  .map((p) => ({
    nombre: p.nombre,
    salario: p.input.salarioBrutoAnual,
    saldo: calcularSaldoFiscal(p.input).saldoFiscalNeto,
  }))
  .sort((a, b) => b.saldo - a.saldo);

const positivos = results.filter((r) => r.saldo >= 0);
const negativos = results.filter((r) => r.saldo < 0);

const correlation = (() => {
  const n = results.length;
  const sumX = results.reduce((s, r) => s + r.salario, 0);
  const sumY = results.reduce((s, r) => s + r.saldo, 0);
  const sumXY = results.reduce((s, r) => s + r.salario * r.saldo, 0);
  const sumX2 = results.reduce((s, r) => s + r.salario * r.salario, 0);
  const sumY2 = results.reduce((s, r) => s + r.saldo * r.saldo, 0);
  const num = n * sumXY - sumX * sumY;
  const den = Math.sqrt((n * sumX2 - sumX * sumX) * (n * sumY2 - sumY * sumY));
  return den === 0 ? 0 : num / den;
})();

export default function Conclusions() {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl p-6 sm:p-8">
      <h3 className="text-xl font-bold text-gray-900 mb-4">
        ¿Qué dicen los datos?
      </h3>

      <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <p className="font-semibold text-primary mb-1">
            El factor determinante es el salario, no la nacionalidad.
          </p>
          <p>
            La correlación entre salario bruto y saldo fiscal neto es de{' '}
            <strong>{correlation.toFixed(2)}</strong>. Un trabajador que cobra más
            aporta más — independientemente de su pasaporte.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <p className="font-semibold text-positive mb-2">
              Perfiles con saldo positivo ({positivos.length})
            </p>
            <ul className="space-y-1">
              {positivos.map((r) => (
                <li key={r.nombre} className="flex justify-between">
                  <span>{r.nombre}</span>
                  <span className="font-medium text-positive">+{formatEUR(r.saldo)}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <p className="font-semibold text-negative mb-2">
              Perfiles con saldo negativo ({negativos.length})
            </p>
            <ul className="space-y-1">
              {negativos.map((r) => (
                <li key={r.nombre} className="flex justify-between">
                  <span>{r.nombre}</span>
                  <span className="font-medium text-negative">{formatEUR(r.saldo)}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="space-y-3 mt-2">
          <p>
            <strong>Tres conclusiones que se sostienen con los datos:</strong>
          </p>
          <ol className="list-decimal ml-5 space-y-2">
            <li>
              <strong>Un jubilado europeo en la costa tiene un saldo fiscal peor que un
              trabajador marroquí en la agricultura.</strong> El jubilado no cotiza, no paga
              IRPF en España y usa sanidad pública. El trabajador, aunque cobre poco,
              genera ingresos fiscales reales.
            </li>
            <li>
              <strong>La diferencia entre colectivos trabajadores es mucho menor de lo que
              sugiere el debate público.</strong> Entre el perfil con mejor saldo (excluyendo
              jubilados) y el peor, la diferencia es de{' '}
              {formatEUR(Math.abs(results[0].saldo - results[results.length - 1].saldo))}.
              La variable clave es el salario, y los salarios dependen del sector y la
              cualificación, no del origen.
            </li>
            <li>
              <strong>El tamaño del hogar importa tanto como el salario.</strong> Dos
              trabajadores con el mismo sueldo pero distinto número de hijos escolarizados
              tienen saldos muy diferentes. Esto afecta más a colectivos con mayor fecundidad,
              pero también a cualquier familia española numerosa.
            </li>
          </ol>
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mt-4">
          <p className="font-semibold text-amber-900 mb-1">Recordatorio</p>
          <p className="text-amber-800">
            Estos cálculos solo capturan la aportación fiscal directa en edad de trabajo.
            No incluyen el efecto sobre la demanda agregada, el sostenimiento de sectores
            con escasez de mano de obra, las cotizaciones futuras a pensiones ni el
            impacto sobre el precio de bienes y servicios. El saldo fiscal es una parte
            de la ecuación, no toda la ecuación.
          </p>
        </div>
      </div>
    </div>
  );
}
