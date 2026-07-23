export const COLORS: Record<string, string> = {
  'Española': '#1e40af',
  'Marroquí': '#16a34a',
  'Colombiana': '#eab308',
  'Rumana': '#dc2626',
  'Ecuatoriana': '#8b5cf6',
  'Venezolana': '#ec4899',
  'China': '#f97316',
  'Peruana': '#06b6d4',
  'Hondureña': '#84cc16',
  'Italiana': '#6366f1',
  'Francesa': '#a855f7',
  'Alemana': '#0ea5e9',
  'Británica': '#14b8a6',
  'Argentina': '#f43f5e',
  'Estadounidense': '#3b82f6',
  'Portuguesa': '#d97706',
  'Boliviana': '#7c3aed',
  'Ucraniana': '#0d9488',
  'Resto UE': '#94a3b8',
  'Extra-UE': '#64748b',
};

export const PALETTE = [
  '#1e40af', '#16a34a', '#eab308', '#dc2626', '#8b5cf6',
  '#ec4899', '#f97316', '#06b6d4', '#84cc16', '#6366f1',
  '#a855f7', '#0ea5e9', '#14b8a6', '#f43f5e', '#3b82f6',
  '#d97706', '#7c3aed', '#0d9488',
];

export function getColor(nacionalidad: string): string {
  return COLORS[nacionalidad] ?? '#94a3b8';
}
