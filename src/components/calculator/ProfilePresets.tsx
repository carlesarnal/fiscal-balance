import type { PerfilPredefinido, HouseholdInput } from '../../types';
import { presetProfiles } from '../../data/presetProfiles';

interface Props {
  activeId: string | null;
  onSelect: (input: HouseholdInput, id: string) => void;
}

export default function ProfilePresets({ activeId, onSelect }: Props) {
  return (
    <div className="mb-6">
      <p className="text-sm font-medium text-gray-700 mb-3">Perfiles predefinidos</p>
      <div className="flex flex-wrap gap-2">
        {presetProfiles.map((p: PerfilPredefinido) => (
          <button
            key={p.id}
            onClick={() => onSelect(p.input, p.id)}
            className={`px-3 py-1.5 text-sm rounded-full border transition-colors ${
              activeId === p.id
                ? 'bg-primary text-white border-primary'
                : 'bg-white text-gray-700 border-gray-300 hover:border-primary hover:text-primary'
            }`}
          >
            {p.nombre}
          </button>
        ))}
      </div>
    </div>
  );
}
