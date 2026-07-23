import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import {
  POBLACION_TOTAL,
  declarantesIRPF,
  seguridadSocial,
  noContribuyentes,
  beneficiarios,
  piramideFiscal,
  datosDestacados,
} from '../../data/fiscalPyramidData';
import { formatNumber, formatEUR } from '../../utils/formatters';

const COLORS_TRAMOS = ['#94a3b8', '#64748b', '#3b82f6', '#1e40af', '#7c3aed'];

const tramoChart = declarantesIRPF.tramos.map((t) => ({
  rango: t.rango,
  declarantes: t.declarantes,
  pctRecaudacion: t.pctRecaudacion,
}));

const tramoRecaudacion = declarantesIRPF.tramos.map((t) => ({
  rango: t.rango,
  pctRecaudacion: t.pctRecaudacion,
  pctDeclarantes: t.pctDeclarantes,
}));

export default function FiscalPyramid() {
  return (
    <div className="space-y-6">
      {/* Titular */}
      <div className="bg-white border border-gray-200 rounded-xl p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          ¿Quién paga la fiesta?
        </h3>
        <p className="text-gray-600 mb-6">
          De los {formatNumber(POBLACION_TOTAL)} residentes en España, se estima que solo entre{' '}
          <strong className="text-primary">{formatNumber(piramideFiscal.contribuyentesNetosEstimados.min)}</strong> y{' '}
          <strong className="text-primary">{formatNumber(piramideFiscal.contribuyentesNetosEstimados.max)}</strong>{' '}
          personas ({piramideFiscal.pctContribuyentes.min}-{piramideFiscal.pctContribuyentes.max}% de la población)
          son <strong>contribuyentes fiscales netos</strong>: aportan al Estado más de lo que reciben en servicios.
        </p>

        {/* Cifras destacadas */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {datosDestacados.map((d, i) => (
            <div key={i} className="bg-surface rounded-lg p-3 text-center">
              <p className="text-2xl font-bold text-primary">{d.cifra}</p>
              <p className="text-xs text-gray-600 mt-1">{d.descripcion}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Quién paga el IRPF */}
      <div className="grid lg:grid-cols-2 gap-6">
        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <h4 className="text-base font-semibold text-gray-900 mb-1">
            ¿Cuántos declaran IRPF por tramo?
          </h4>
          <p className="text-sm text-gray-500 mb-3">
            {formatNumber(declarantesIRPF.total)} declarantes en total. El 54,5% gana menos de 21.000 €.
          </p>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={tramoChart} layout="vertical" margin={{ top: 5, right: 10, left: 110, bottom: 5 }}>
              <XAxis type="number" tickFormatter={(v: number) => `${(v / 1_000_000).toFixed(0)}M`} tick={{ fontSize: 11 }} />
              <YAxis type="category" dataKey="rango" tick={{ fontSize: 11 }} width={105} />
              <Tooltip formatter={(value) => formatNumber(Number(value))} />
              <Bar dataKey="declarantes" radius={[0, 4, 4, 0]}>
                {tramoChart.map((_, i) => (
                  <Cell key={i} fill={COLORS_TRAMOS[i]} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
          <p className="text-xs text-gray-400 mt-2">Fuente: Agencia Tributaria, IRPF 2023</p>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <h4 className="text-base font-semibold text-gray-900 mb-1">
            ¿Cuánto paga cada tramo?
          </h4>
          <p className="text-sm text-gray-500 mb-3">
            El 5,6% de declarantes con rentas &gt; 60K paga el 42% de todo el IRPF.
          </p>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={tramoRecaudacion} layout="vertical" margin={{ top: 5, right: 10, left: 110, bottom: 5 }}>
              <XAxis type="number" domain={[0, 60]} tickFormatter={(v: number) => `${v}%`} tick={{ fontSize: 11 }} />
              <YAxis type="category" dataKey="rango" tick={{ fontSize: 11 }} width={105} />
              <Tooltip formatter={(value, name) => [`${value}%`, name === 'pctRecaudacion' ? '% recaudación' : '% declarantes']} />
              <Bar dataKey="pctRecaudacion" name="% recaudación" radius={[0, 4, 4, 0]}>
                {tramoRecaudacion.map((_, i) => (
                  <Cell key={i} fill={COLORS_TRAMOS[i]} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
          <p className="text-xs text-gray-400 mt-2">Fuente: Agencia Tributaria, IRPF 2023</p>
        </div>
      </div>

      {/* Tabla IRPF detallada */}
      <div className="bg-white border border-gray-200 rounded-xl p-5">
        <h4 className="text-base font-semibold text-gray-900 mb-3">
          Detalle por tramo de renta
        </h4>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b-2 border-gray-200 text-left">
                <th className="py-2 pr-3 font-semibold text-gray-700">Tramo de renta</th>
                <th className="py-2 px-3 font-semibold text-gray-700 text-right">Declarantes</th>
                <th className="py-2 px-3 font-semibold text-gray-700 text-right">% declarantes</th>
                <th className="py-2 px-3 font-semibold text-gray-700 text-right">IRPF pagado</th>
                <th className="py-2 px-3 font-semibold text-gray-700 text-right">% recaudación</th>
                <th className="py-2 pl-3 font-semibold text-gray-700 text-right">Cuota media</th>
              </tr>
            </thead>
            <tbody>
              {declarantesIRPF.tramos.map((t, i) => (
                <tr key={i} className={`border-b border-gray-100 ${i % 2 === 0 ? 'bg-gray-50/50' : ''}`}>
                  <td className="py-2 pr-3 font-medium text-gray-900">{t.rango}</td>
                  <td className="py-2 px-3 text-right">{formatNumber(t.declarantes)}</td>
                  <td className="py-2 px-3 text-right">{t.pctDeclarantes}%</td>
                  <td className="py-2 px-3 text-right">{formatEUR(t.irpfPagado)}</td>
                  <td className="py-2 px-3 text-right font-medium" style={{ color: COLORS_TRAMOS[i] }}>{t.pctRecaudacion}%</td>
                  <td className="py-2 pl-3 text-right font-medium">{formatEUR(t.cuotaMedia)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Quién no contribuye */}
      <div className="grid lg:grid-cols-2 gap-6">
        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <h4 className="text-base font-semibold text-gray-900 mb-3">
            Población que no contribuye IRPF/SS (~{formatNumber(noContribuyentes.reduce((s, n) => s + n.cantidad, 0))})
          </h4>
          <div className="space-y-2">
            {noContribuyentes.map((n, i) => (
              <div key={i} className="flex items-center justify-between py-1.5 border-b border-gray-100 last:border-0">
                <span className="text-sm text-gray-700">
                  <span className="mr-2">{n.icono}</span>{n.grupo}
                </span>
                <span className="text-sm font-medium text-gray-900">{formatNumber(n.cantidad)}</span>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-400 mt-3">
            Nota: pensionistas y desempleados pagan IRPF sobre sus prestaciones, pero son receptores netos.
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <h4 className="text-base font-semibold text-gray-900 mb-3">
            Principales partidas de gasto público
          </h4>
          <div className="space-y-2">
            {beneficiarios.map((b, i) => (
              <div key={i} className="py-1.5 border-b border-gray-100 last:border-0">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-900">{b.concepto}</span>
                  <span className="text-sm font-bold text-primary">{formatEUR(b.costeAnual)}/año</span>
                </div>
                <p className="text-xs text-gray-500">{b.detalle}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Resumen Seguridad Social */}
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
        <h4 className="text-base font-semibold text-amber-900 mb-2">
          El ratio cotizantes/pensionista: {seguridadSocial.ratioCotizantesPensionista}
        </h4>
        <p className="text-sm text-amber-800">
          Hay {formatNumber(seguridadSocial.afiliadosTotal)} cotizantes para sostener a {formatNumber(9_260_000)} pensionistas.
          En 2008 el ratio era 2,7. El sistema necesita más contribuyentes — precisamente lo que aporta
          la inmigración laboral, independientemente de su saldo fiscal neto a corto plazo.
          De los {formatNumber(seguridadSocial.afiliadosTotal)} afiliados, {formatNumber(seguridadSocial.tiempoCompleto)} son
          a tiempo completo y {formatNumber(seguridadSocial.parcialFijosDiscontinuos)} a tiempo parcial o fijos discontinuos.
        </p>
      </div>
    </div>
  );
}
