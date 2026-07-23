import type { ReactNode } from 'react';

interface Props {
  title: string;
  subtitle?: string;
  source?: string;
  children: ReactNode;
}

export default function ChartCard({ title, subtitle, source, children }: Props) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-5 sm:p-6">
      <div className="mb-4">
        <h3 className="text-base font-semibold text-gray-900">{title}</h3>
        {subtitle && <p className="text-sm text-gray-500 mt-0.5">{subtitle}</p>}
      </div>
      {children}
      {source && (
        <p className="text-xs text-gray-400 mt-3">Fuente: {source}</p>
      )}
    </div>
  );
}
