import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, ReferenceLine } from 'recharts';
import type { FiscalResult } from '../../types';
import { formatEUR } from '../../utils/formatters';

interface Props {
  result: FiscalResult;
}

export default function BalanceChart({ result }: Props) {
  const data = [
    { nombre: 'IRPF', valor: result.irpf, tipo: 'ingreso' },
    { nombre: 'SS Trab.', valor: result.cotizacionTrabajador, tipo: 'ingreso' },
    { nombre: 'SS Empr.', valor: result.cotizacionEmpresario, tipo: 'ingreso' },
    { nombre: 'IVA', valor: result.ivaEstimado, tipo: 'ingreso' },
    { nombre: 'Sanidad', valor: -result.costeSanidad, tipo: 'coste' },
    { nombre: 'Educación', valor: -result.costeEducacion, tipo: 'coste' },
    { nombre: 'Serv. Púb.', valor: -result.costeServiciosPublicos, tipo: 'coste' },
    ...(result.costePrestaciones > 0
      ? [{ nombre: 'Prestac.', valor: -result.costePrestaciones, tipo: 'coste' }]
      : []),
    { nombre: 'NETO', valor: result.saldoFiscalNeto, tipo: 'neto' },
  ];

  return (
    <div className="mt-6">
      <h4 className="text-sm font-semibold text-gray-700 mb-3">Desglose visual</h4>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} margin={{ top: 5, right: 10, left: 10, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis dataKey="nombre" tick={{ fontSize: 11 }} />
          <YAxis tickFormatter={(v: number) => `${(v / 1000).toFixed(0)}K`} tick={{ fontSize: 11 }} />
          <Tooltip formatter={(value) => formatEUR(Number(value))} />
          <ReferenceLine y={0} stroke="#9ca3af" />
          <Bar dataKey="valor" radius={[4, 4, 0, 0]}>
            {data.map((entry, index) => (
              <Cell
                key={index}
                fill={
                  entry.tipo === 'neto'
                    ? entry.valor >= 0 ? '#1e40af' : '#7c3aed'
                    : entry.tipo === 'ingreso'
                      ? '#16a34a'
                      : '#dc2626'
                }
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
