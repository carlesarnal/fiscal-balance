import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, ReferenceLine, Legend } from 'recharts';
import { chartData, datosProyeccion, pensionistas } from '../../data/projectionData';
import { formatNumber } from '../../utils/formatters';

export default function PensionProjection() {
  return (
    <div className="space-y-6">
      <div className="bg-white border border-gray-200 rounded-xl p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          Proyección del ratio cotizantes/pensionista (2000-2050)
        </h3>
        <p className="text-sm text-gray-600 mb-6">
          La generación del baby boom español ({datosProyeccion.generacionBabyBoom}) comienza a jubilarse
          masivamente a partir de 2025. El pico de presión será entre {datosProyeccion.picoJubilaciones}.
          Se muestran dos escenarios: con y sin inmigración.
        </p>

        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={chartData} margin={{ top: 10, right: 20, left: 10, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis dataKey="anio" tick={{ fontSize: 12 }} />
            <YAxis domain={[0.5, 3]} tick={{ fontSize: 12 }} tickFormatter={(v: number) => v.toFixed(1)} />
            <Tooltip
              formatter={(value, name) => {
                if (value === null || value === undefined) return ['-', String(name)];
                const label = name === 'historico' ? 'Histórico'
                  : name === 'conInmigracion' ? 'Con inmigración'
                  : 'Sin inmigración';
                return [Number(value).toFixed(2), label];
              }}
              labelFormatter={(label) => `Año ${label}`}
            />
            <Legend
              formatter={(value) =>
                value === 'historico' ? 'Histórico'
                : value === 'conInmigracion' ? 'Proyección con inmigración'
                : 'Proyección sin inmigración'
              }
            />
            <ReferenceLine x={2024} stroke="#9ca3af" strokeDasharray="5 5" label={{ value: 'Hoy', position: 'top', fontSize: 11 }} />
            <ReferenceLine y={2} stroke="#f59e0b" strokeDasharray="3 3" label={{ value: 'Umbral crítico', position: 'right', fontSize: 10 }} />
            <Line type="monotone" dataKey="historico" stroke="#1e40af" strokeWidth={3} dot={{ r: 4 }} connectNulls={false} />
            <Line type="monotone" dataKey="conInmigracion" stroke="#16a34a" strokeWidth={2.5} strokeDasharray="8 4" dot={{ r: 4 }} connectNulls={false} />
            <Line type="monotone" dataKey="sinInmigracion" stroke="#dc2626" strokeWidth={2.5} strokeDasharray="8 4" dot={{ r: 4 }} connectNulls={false} />
          </LineChart>
        </ResponsiveContainer>

        <p className="text-xs text-gray-400 mt-2">
          Fuentes: Seguridad Social (histórico), AIReF, INE Proyecciones 2024-2074, Banco de España, European Commission Ageing Report 2024
        </p>
      </div>

      {/* Cifras clave */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          label="Ratio máximo histórico"
          value={datosProyeccion.ratioMaximoHistorico.valor.toFixed(2)}
          detail={`En ${datosProyeccion.ratioMaximoHistorico.anio} (burbuja inmobiliaria)`}
        />
        <StatCard
          label="Ratio actual"
          value={datosProyeccion.ratioActual.valor.toFixed(2)}
          detail={`${formatNumber(21_300_000)} cotizantes / ${formatNumber(pensionistas.actual.millones * 1_000_000)} pensionistas`}
          color="text-primary"
        />
        <StatCard
          label="Ratio 2050 con inmigración"
          value={datosProyeccion.ratioProyectado2050ConInmigracion.valor.toFixed(2)}
          detail={`~${pensionistas.proyectado2050.millones}M pensionistas previstos`}
          color="text-amber-600"
        />
        <StatCard
          label="Ratio 2050 sin inmigración"
          value={datosProyeccion.ratioProyectado2050SinInmigracion.valor.toFixed(2)}
          detail="Escenario de migración neta cero"
          color="text-negative"
        />
      </div>

      {/* Resumen */}
      <div className="bg-red-50 border border-red-200 rounded-xl p-5">
        <h4 className="text-base font-semibold text-red-900 mb-2">
          El Banco de España estima que España necesita ~{formatNumber(datosProyeccion.inmigrantesNecesariosAnuales)} inmigrantes al año
        </h4>
        <p className="text-sm text-red-800">
          Sin inmigración, la población nacida en España caería del 82% al 61% del total en 50 años.
          El gasto en pensiones pasaría del {datosProyeccion.pctGastoPensionesActual}% al {datosProyeccion.pctGastoPensiones2050}% del PIB
          en 2050. La inmigración laboral no resuelve el problema estructural — lo suaviza.
          Un ratio de 1,47 con inmigración sigue siendo insostenible sin reformas del sistema de pensiones.
        </p>
      </div>
    </div>
  );
}

function StatCard({ label, value, detail, color }: { label: string; value: string; detail: string; color?: string }) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
      <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">{label}</p>
      <p className={`text-3xl font-bold mt-1 ${color ?? 'text-gray-900'}`}>{value}</p>
      <p className="text-xs text-gray-500 mt-1">{detail}</p>
    </div>
  );
}
