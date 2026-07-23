import { ScatterChart, Scatter, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, ReferenceLine } from 'recharts';
import { paisesComparados, mediaUE } from '../../data/internationalComparisonData';

const scatterData = paisesComparados.map((p) => ({
  ...p,
  x: p.presionFiscal,
  y: p.corrupcionCPI,
}));

export default function InternationalComparator() {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6">
      <h3 className="text-xl font-bold text-gray-900 mb-2">
        ¿Pagamos mucho o recibimos poco? España vs. Europa
      </h3>
      <p className="text-sm text-gray-600 mb-6">
        España recauda un {paisesComparados.find((p) => p.pais === 'España')!.presionFiscal}% del PIB en
        impuestos — por debajo de la media UE ({mediaUE.presionFiscal}%). Pero la calidad de sus servicios
        públicos también está por debajo. ¿Es un problema de ingresos o de eficiencia?
      </p>

      {/* Scatter plot: presión fiscal vs transparencia */}
      <div className="mb-6">
        <h4 className="text-sm font-semibold text-gray-700 mb-3">
          Presión fiscal vs. percepción de corrupción
        </h4>
        <ResponsiveContainer width="100%" height={350}>
          <ScatterChart margin={{ top: 10, right: 20, left: 10, bottom: 10 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis type="number" dataKey="x" name="Presión fiscal" unit="%" domain={[32, 46]} tick={{ fontSize: 11 }} label={{ value: 'Presión fiscal (% PIB)', position: 'bottom', fontSize: 12, offset: -5 }} />
            <YAxis type="number" dataKey="y" name="CPI" domain={[50, 95]} tick={{ fontSize: 11 }} label={{ value: 'Transparencia (CPI)', angle: -90, position: 'insideLeft', fontSize: 12 }} />
            <Tooltip
              content={({ active, payload }) => {
                if (!active || !payload?.length) return null;
                const d = payload[0].payload;
                return (
                  <div className="bg-white border border-gray-200 rounded-lg p-3 shadow-lg text-sm">
                    <p className="font-semibold">{d.bandera} {d.pais}</p>
                    <p>Presión fiscal: {d.presionFiscal}% PIB</p>
                    <p>Transparencia (CPI): {d.corrupcionCPI}/100</p>
                  </div>
                );
              }}
            />
            <ReferenceLine x={mediaUE.presionFiscal} stroke="#9ca3af" strokeDasharray="5 5" />
            <Scatter data={scatterData} fill="#1e40af">
              {scatterData.map((entry, i) => {
                const isSpain = entry.pais === 'España';
                return (
                  <circle
                    key={i}
                    r={isSpain ? 8 : 5}
                    fill={isSpain ? '#dc2626' : '#1e40af'}
                    stroke={isSpain ? '#991b1b' : 'none'}
                    strokeWidth={isSpain ? 2 : 0}
                  />
                );
              })}
            </Scatter>
          </ScatterChart>
        </ResponsiveContainer>
        <p className="text-xs text-gray-500 mt-1">
          El punto rojo es España. Línea vertical: media UE ({mediaUE.presionFiscal}%).
          Los países con mayor transparencia tienden a tener mejores servicios públicos, independientemente de la presión fiscal.
        </p>
      </div>

      {/* Tabla comparativa */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b-2 border-gray-200 text-left">
              <th className="py-2 pr-2 font-semibold text-gray-700">País</th>
              <th className="py-2 px-2 font-semibold text-gray-700 text-right">Impuestos<br /><span className="font-normal text-xs">% PIB</span></th>
              <th className="py-2 px-2 font-semibold text-gray-700 text-right">Gasto púb.<br /><span className="font-normal text-xs">% PIB</span></th>
              <th className="py-2 px-2 font-semibold text-gray-700 text-right">Sanidad<br /><span className="font-normal text-xs">EHCI /1000</span></th>
              <th className="py-2 px-2 font-semibold text-gray-700 text-right">Educación<br /><span className="font-normal text-xs">PISA mate</span></th>
              <th className="py-2 px-2 font-semibold text-gray-700 text-right">Infra.<br /><span className="font-normal text-xs">IMD /100</span></th>
              <th className="py-2 px-2 font-semibold text-gray-700 text-right">Corrupción<br /><span className="font-normal text-xs">CPI /100</span></th>
              <th className="py-2 pl-2 font-semibold text-gray-700 text-right">Gobierno<br /><span className="font-normal text-xs">rank WB</span></th>
            </tr>
          </thead>
          <tbody>
            {[...paisesComparados]
              .sort((a, b) => b.presionFiscal - a.presionFiscal)
              .map((p, i) => {
                const isSpain = p.pais === 'España';
                return (
                  <tr
                    key={p.pais}
                    className={`border-b border-gray-100 ${isSpain ? 'bg-red-50 font-semibold' : i % 2 === 0 ? 'bg-gray-50/50' : ''}`}
                  >
                    <td className="py-2 pr-2 whitespace-nowrap">{p.bandera} {p.pais}</td>
                    <td className="py-2 px-2 text-right">{p.presionFiscal}%</td>
                    <td className="py-2 px-2 text-right">{p.gastoPubPctPIB}%</td>
                    <td className={`py-2 px-2 text-right ${isSpain ? 'text-negative' : ''}`}>{p.sanidadEHCI}</td>
                    <td className="py-2 px-2 text-right">{p.educacionPISA}</td>
                    <td className={`py-2 px-2 text-right ${isSpain ? 'text-negative' : ''}`}>{p.infraestructura}</td>
                    <td className={`py-2 px-2 text-right ${isSpain ? 'text-negative' : ''}`}>{p.corrupcionCPI}</td>
                    <td className={`py-2 pl-2 text-right ${isSpain ? 'text-negative' : ''}`}>#{p.gobiernoRanking}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>

      <div className="mt-6 bg-gray-50 border border-gray-200 rounded-lg p-4">
        <p className="text-sm text-gray-700">
          <strong>La lectura:</strong> España no es el país que más impuestos cobra, pero es uno de los que
          peor devuelve a cambio. Países Bajos recauda solo 2 puntos más de PIB que España y tiene la mejor
          sanidad de Europa (EHCI 883 vs 698), la mejor educación (PISA 493 vs 473), y un índice de
          corrupción de 78 vs 56. El problema de España no es solo cuánto se recauda, sino cómo se gasta
          y cuánto se pierde por el camino.
        </p>
      </div>

      <p className="text-xs text-gray-400 mt-3">
        Fuentes: OECD Revenue Statistics 2025, EHCI 2018, OECD PISA 2022, IMD 2025, Transparency International CPI 2024, World Bank 2024
      </p>
    </div>
  );
}
