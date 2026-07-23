import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell, ReferenceLine } from 'recharts';
import { comparacionAnualPerCapita } from '../../data/internationalData';
import { formatEUR } from '../../utils/formatters';
import ChartCard from './ChartCard';

export default function InternationalChart() {
  return (
    <ChartCard
      title="Comparación internacional: impacto fiscal anual per cápita"
      subtitle="Coste (+) o beneficio (-) neto anual de un inmigrante para el Estado"
      source="IZA DP 17569 (NL), Finansministeriet (DK), OECD 2025"
    >
      <ResponsiveContainer width="100%" height={280}>
        <BarChart data={comparacionAnualPerCapita} layout="vertical" margin={{ top: 5, right: 10, left: 160, bottom: 5 }}>
          <XAxis type="number" tickFormatter={(v: number) => `${(v / 1000).toFixed(0)}K €`} tick={{ fontSize: 11 }} />
          <YAxis type="category" dataKey="pais" tick={{ fontSize: 11 }} width={155} />
          <Tooltip formatter={(value) => formatEUR(Number(value))} />
          <ReferenceLine x={0} stroke="#9ca3af" />
          <Bar dataKey="valorAnual" radius={[0, 4, 4, 0]}>
            {comparacionAnualPerCapita.map((entry, index) => (
              <Cell key={index} fill={entry.color} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </ChartCard>
  );
}
