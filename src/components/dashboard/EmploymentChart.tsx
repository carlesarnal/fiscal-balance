import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell, ReferenceLine } from 'recharts';
import { employmentData, TASA_EMPLEO_ESPANOLA } from '../../data/employmentData';
import ChartCard from './ChartCard';

export default function EmploymentChart() {
  return (
    <ChartCard
      title="Tasa de empleo por nacionalidad"
      subtitle="% de población en edad de trabajar que está ocupada"
      source="INE - EPA, 2024 T4"
    >
      <ResponsiveContainer width="100%" height={500}>
        <BarChart data={employmentData} layout="vertical" margin={{ top: 5, right: 10, left: 90, bottom: 5 }}>
          <XAxis type="number" domain={[0, 100]} tickFormatter={(v: number) => `${v}%`} tick={{ fontSize: 11 }} />
          <YAxis type="category" dataKey="nacionalidad" tick={{ fontSize: 11 }} width={85} />
          <Tooltip formatter={(value) => `${value}%`} />
          <ReferenceLine x={TASA_EMPLEO_ESPANOLA} stroke="#1e40af" strokeDasharray="5 5" label={{ value: `Española: ${TASA_EMPLEO_ESPANOLA}%`, position: 'top', fontSize: 10 }} />
          <Bar dataKey="valor" radius={[0, 4, 4, 0]}>
            {employmentData.map((entry, index) => (
              <Cell
                key={index}
                fill={entry.valor >= TASA_EMPLEO_ESPANOLA ? '#16a34a' : '#f97316'}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </ChartCard>
  );
}
