import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell, ReferenceLine } from 'recharts';
import { presetProfiles } from '../../data/presetProfiles';
import { calcularSaldoFiscal } from '../../utils/fiscalCalculator';
import { formatEUR } from '../../utils/formatters';
import ChartCard from './ChartCard';

const profileBalances = presetProfiles.map((p) => {
  const result = calcularSaldoFiscal(p.input);
  return {
    nombre: p.nombre,
    saldo: result.saldoFiscalNeto,
    ingresos: result.totalIngresos,
    costes: result.totalCostes,
  };
}).sort((a, b) => b.saldo - a.saldo);

export default function FiscalBalanceChart() {
  return (
    <ChartCard
      title="Saldo fiscal neto estimado por perfil"
      subtitle="Basado en el salario medio y tamaño de hogar típico de cada colectivo"
      source="Estimación propia con datos INE/SS"
    >
      <ResponsiveContainer width="100%" height={560}>
        <BarChart data={profileBalances} layout="vertical" margin={{ top: 5, right: 10, left: 130, bottom: 5 }}>
          <XAxis type="number" tickFormatter={(v: number) => `${(v / 1000).toFixed(0)}K €`} tick={{ fontSize: 11 }} />
          <YAxis type="category" dataKey="nombre" tick={{ fontSize: 11 }} width={125} />
          <Tooltip
            formatter={(value, name) => [formatEUR(Number(value)), name === 'saldo' ? 'Saldo neto' : String(name)]}
          />
          <ReferenceLine x={0} stroke="#9ca3af" />
          <Bar dataKey="saldo" radius={[0, 4, 4, 0]}>
            {profileBalances.map((entry, index) => (
              <Cell
                key={index}
                fill={entry.saldo >= 0 ? '#16a34a' : '#dc2626'}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </ChartCard>
  );
}
