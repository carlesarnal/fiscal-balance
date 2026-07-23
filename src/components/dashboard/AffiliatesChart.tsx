import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { affiliatesData } from '../../data/affiliatesData';
import { formatNumber } from '../../utils/formatters';
import ChartCard from './ChartCard';

export default function AffiliatesChart() {
  return (
    <ChartCard
      title="Afiliados a la Seguridad Social por nacionalidad"
      subtitle="Trabajadores en alta laboral"
      source="Seguridad Social, 2024"
    >
      <ResponsiveContainer width="100%" height={480}>
        <BarChart data={affiliatesData} layout="vertical" margin={{ top: 5, right: 10, left: 90, bottom: 5 }}>
          <XAxis type="number" tickFormatter={(v: number) => `${(v / 1000).toFixed(0)}K`} tick={{ fontSize: 11 }} />
          <YAxis type="category" dataKey="nacionalidad" tick={{ fontSize: 11 }} width={85} />
          <Tooltip formatter={(value) => formatNumber(Number(value))} />
          <Bar dataKey="valor" radius={[0, 4, 4, 0]}>
            {affiliatesData.map((entry, index) => (
              <Cell key={index} fill={entry.color} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </ChartCard>
  );
}
