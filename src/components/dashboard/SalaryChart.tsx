import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { salaryData } from '../../data/salaryData';
import { formatEUR } from '../../utils/formatters';
import ChartCard from './ChartCard';

export default function SalaryChart() {
  return (
    <ChartCard
      title="Salario bruto medio anual por nacionalidad"
      subtitle="Estimación basada en EAES + EPA del INE"
      source="INE - Encuesta Anual de Estructura Salarial 2022-2023"
    >
      <ResponsiveContainer width="100%" height={500}>
        <BarChart data={salaryData} layout="vertical" margin={{ top: 5, right: 10, left: 90, bottom: 5 }}>
          <XAxis type="number" tickFormatter={(v: number) => `${(v / 1000).toFixed(0)}K €`} tick={{ fontSize: 11 }} />
          <YAxis type="category" dataKey="nacionalidad" tick={{ fontSize: 11 }} width={85} />
          <Tooltip formatter={(value) => formatEUR(Number(value))} />
          <Bar dataKey="valor" radius={[0, 4, 4, 0]}>
            {salaryData.map((entry, index) => (
              <Cell key={index} fill={entry.color} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </ChartCard>
  );
}
