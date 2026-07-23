import type { HouseholdInput } from '../../types';
import InfoTooltip from '../common/InfoTooltip';

interface Props {
  input: HouseholdInput;
  onChange: (input: HouseholdInput) => void;
}

export default function CalculatorForm({ input, onChange }: Props) {
  const update = (field: keyof HouseholdInput, value: number | boolean) => {
    onChange({ ...input, [field]: value });
  };

  return (
    <div className="space-y-5">
      {/* Salario */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Salario bruto anual (por trabajador)
          <InfoTooltip text="Salario bruto anual antes de impuestos y cotizaciones. Si hay dos trabajadores, cada uno con este salario." />
        </label>
        <input
          type="range"
          min={0}
          max={400000}
          step={500}
          value={input.salarioBrutoAnual}
          onChange={(e) => update('salarioBrutoAnual', Number(e.target.value))}
          className="w-full accent-primary"
        />
        <div className="flex justify-between items-center text-xs text-gray-500 mt-1">
          <span>0 €</span>
          <input
            type="number"
            min={0}
            max={400000}
            step={500}
            value={input.salarioBrutoAnual}
            onChange={(e) => update('salarioBrutoAnual', Math.min(400000, Math.max(0, Number(e.target.value))))}
            className="w-32 text-center text-base font-semibold text-gray-900 border border-gray-300 rounded-lg px-2 py-1"
          />
          <span>400.000 €</span>
        </div>
      </div>

      {/* Miembros del hogar */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Miembros del hogar
          </label>
          <select
            value={input.miembrosHogar}
            onChange={(e) => {
              const v = Number(e.target.value);
              onChange({
                ...input,
                miembrosHogar: v,
                miembrosTrabajando: Math.min(input.miembrosTrabajando, v),
                hijosEscolarizados: Math.min(input.hijosEscolarizados, Math.max(0, v - input.miembrosTrabajando)),
              });
            }}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
          >
            {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
              <option key={n} value={n}>{n}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Miembros trabajando
            <InfoTooltip text="Cuántos miembros del hogar tienen empleo formal con el salario indicado." />
          </label>
          <select
            value={input.miembrosTrabajando}
            onChange={(e) => update('miembrosTrabajando', Number(e.target.value))}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
          >
            {Array.from({ length: input.miembrosHogar }, (_, i) => i + 1).map((n) => (
              <option key={n} value={n}>{n}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Hijos */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Hijos escolarizados (educación pública)
          <InfoTooltip text="Número de hijos en el sistema educativo público (infantil, primaria, ESO, bachillerato o FP). Coste medio: 8.293 €/alumno/año." />
        </label>
        <select
          value={input.hijosEscolarizados}
          onChange={(e) => update('hijosEscolarizados', Number(e.target.value))}
          className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
        >
          {Array.from({ length: Math.max(1, input.miembrosHogar - input.miembrosTrabajando + 1) }, (_, i) => i).map((n) => (
            <option key={n} value={n}>{n}</option>
          ))}
        </select>
      </div>

      {/* Toggles */}
      <div className="space-y-3">
        <label className="flex items-center gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={input.usaSanidadPublica}
            onChange={(e) => update('usaSanidadPublica', e.target.checked)}
            className="w-4 h-4 accent-primary"
          />
          <span className="text-sm text-gray-700">
            Usa sanidad pública
            <InfoTooltip text="Coste medio sanitario: 2.084 €/persona/año. Si se desactiva, se asume sanidad privada (coste 0 para el Estado)." />
          </span>
        </label>

        <label className="flex items-center gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={input.recibePrestacioesSociales}
            onChange={(e) => update('recibePrestacioesSociales', e.target.checked)}
            className="w-4 h-4 accent-primary"
          />
          <span className="text-sm text-gray-700">
            Recibe prestaciones sociales (IMV, ayudas)
          </span>
        </label>

        {input.recibePrestacioesSociales && (
          <div className="ml-7">
            <label className="block text-sm text-gray-600 mb-1">
              Importe anual de prestaciones
            </label>
            <input
              type="number"
              min={0}
              max={20000}
              step={100}
              value={input.importePrestaciones}
              onChange={(e) => update('importePrestaciones', Number(e.target.value))}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
            />
          </div>
        )}
      </div>
    </div>
  );
}
