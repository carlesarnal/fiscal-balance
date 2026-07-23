import { presetProfiles } from '../../data/presetProfiles';
import { calcularSaldoFiscal } from '../../utils/fiscalCalculator';
import { formatEUR } from '../../utils/formatters';

const rows = presetProfiles.map((p) => {
  const r = calcularSaldoFiscal(p.input);
  return {
    nombre: p.nombre,
    salario: p.input.salarioBrutoAnual,
    hogar: p.input.miembrosHogar,
    trabajando: p.input.miembrosTrabajando,
    hijos: p.input.hijosEscolarizados,
    ingresos: r.totalIngresos,
    costes: r.totalCostes,
    saldo: r.saldoFiscalNeto,
  };
}).sort((a, b) => b.saldo - a.saldo);

export default function SummaryTable() {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-5 sm:p-6">
      <h3 className="text-base font-semibold text-gray-900 mb-1">
        Tabla resumen: saldo fiscal neto por perfil
      </h3>
      <p className="text-sm text-gray-500 mb-4">
        Todos los perfiles calculados con la misma metodología. Ordenados de mayor a menor saldo neto.
      </p>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b-2 border-gray-200 text-left">
              <th className="py-2 pr-3 font-semibold text-gray-700">Perfil</th>
              <th className="py-2 px-3 font-semibold text-gray-700 text-right">Salario</th>
              <th className="py-2 px-3 font-semibold text-gray-700 text-center">Hogar</th>
              <th className="py-2 px-3 font-semibold text-gray-700 text-center">Trabajan</th>
              <th className="py-2 px-3 font-semibold text-gray-700 text-center">Hijos esc.</th>
              <th className="py-2 px-3 font-semibold text-gray-700 text-right">Ingresos Estado</th>
              <th className="py-2 px-3 font-semibold text-gray-700 text-right">Coste Estado</th>
              <th className="py-2 pl-3 font-semibold text-gray-700 text-right">Saldo neto</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr
                key={row.nombre}
                className={`border-b border-gray-100 ${i % 2 === 0 ? 'bg-gray-50/50' : ''}`}
              >
                <td className="py-2 pr-3 font-medium text-gray-900 whitespace-nowrap">
                  {row.nombre}
                </td>
                <td className="py-2 px-3 text-right text-gray-700">
                  {row.salario > 0 ? formatEUR(row.salario) : '—'}
                </td>
                <td className="py-2 px-3 text-center text-gray-700">{row.hogar}</td>
                <td className="py-2 px-3 text-center text-gray-700">{row.trabajando}</td>
                <td className="py-2 px-3 text-center text-gray-700">{row.hijos}</td>
                <td className="py-2 px-3 text-right text-gray-700">{formatEUR(row.ingresos)}</td>
                <td className="py-2 px-3 text-right text-gray-700">{formatEUR(row.costes)}</td>
                <td className={`py-2 pl-3 text-right font-bold whitespace-nowrap ${
                  row.saldo >= 0 ? 'text-positive' : 'text-negative'
                }`}>
                  {row.saldo >= 0 ? '+' : ''}{formatEUR(row.saldo)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="text-xs text-gray-400 mt-3">
        Fuente: estimación propia con datos INE, Seguridad Social, Ministerio de Sanidad y Ministerio de Educación.
        Los jubilados muestran salario 0 porque cobran pensiones extranjeras que no cotizan en España.
      </p>
    </div>
  );
}
