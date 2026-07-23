import { useState, useMemo } from 'react';
import type { HouseholdInput } from '../types';
import { calcularSaldoFiscal } from '../utils/fiscalCalculator';
import SectionTitle from '../components/common/SectionTitle';
import ProfilePresets from '../components/calculator/ProfilePresets';
import CalculatorForm from '../components/calculator/CalculatorForm';
import CalculatorResult from '../components/calculator/CalculatorResult';
import BalanceChart from '../components/calculator/BalanceChart';

const DEFAULT_INPUT: HouseholdInput = {
  salarioBrutoAnual: 22000,
  miembrosHogar: 3,
  miembrosTrabajando: 1,
  hijosEscolarizados: 1,
  usaSanidadPublica: true,
  recibePrestacioesSociales: false,
  importePrestaciones: 0,
};

export default function CalculatorPage() {
  const [input, setInput] = useState<HouseholdInput>(DEFAULT_INPUT);
  const [activePreset, setActivePreset] = useState<string | null>(null);

  const result = useMemo(() => calcularSaldoFiscal(input), [input]);

  const handlePresetSelect = (presetInput: HouseholdInput, id: string) => {
    setInput(presetInput);
    setActivePreset(id);
  };

  const handleInputChange = (newInput: HouseholdInput) => {
    setInput(newInput);
    setActivePreset(null);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      <SectionTitle
        title="Calculadora de saldo fiscal"
        subtitle="Introduce los datos de un hogar y obtén una estimación del balance entre lo que aporta al Estado y lo que recibe."
      />

      <ProfilePresets activeId={activePreset} onSelect={handlePresetSelect} />

      <div className="grid lg:grid-cols-2 gap-8">
        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Datos del hogar</h3>
          <CalculatorForm input={input} onChange={handleInputChange} />
        </div>

        <div>
          <CalculatorResult result={result} />
          <BalanceChart result={result} />
        </div>
      </div>
    </div>
  );
}
