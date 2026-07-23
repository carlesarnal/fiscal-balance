import { useState, useMemo } from 'react';
import { calcularIRPF } from '../../utils/irpfCalculator';
import { formatEUR } from '../../utils/formatters';
import {
  SS_TRABAJADOR_PCTG,
  SS_EMPRESARIO_PCTG,
  SS_BASE_MAXIMA_ANUAL,
  TASA_AHORRO,
  TIPO_IVA_EFECTIVO,
} from '../../data/taxBrackets';
import {
  GASTO_SANIDAD_PER_CAPITA,
  GASTO_EDUCACION_POR_ALUMNO,
} from '../../data/spendingData';

export default function PersonalReturn() {
  const [salario, setSalario] = useState(35000);

  const calc = useMemo(() => {
    const baseCot = Math.min(salario, SS_BASE_MAXIMA_ANUAL);
    const irpf = calcularIRPF(salario);
    const ssTrab = baseCot * SS_TRABAJADOR_PCTG;
    const ssEmpr = baseCot * SS_EMPRESARIO_PCTG;
    const rentaDisponible = salario - irpf - ssTrab;
    const iva = rentaDisponible * (1 - TASA_AHORRO) * TIPO_IVA_EFECTIVO;
    const totalAportado = irpf + ssTrab + ssEmpr + iva;

    const tipoEfectivo = salario > 0 ? totalAportado / salario : 0;

    const sanidadRecibida = GASTO_SANIDAD_PER_CAPITA;
    const serviciosPublicos = 3500;
    const totalRecibido = sanidadRecibida + serviciosPublicos;

    const saldoPersonal = totalAportado - totalRecibido;

    const pensionMediaMensual = 1260;
    const mesesPensionFinanciados = totalAportado / pensionMediaMensual;

    const salarioMedicoMensual = 4500;
    const mesesMedicoFinanciados = totalAportado / (salarioMedicoMensual * 12) * 12;

    const costeAlumnoPrimaria = GASTO_EDUCACION_POR_ALUMNO;
    const alumnosFinanciados = totalAportado / costeAlumnoPrimaria;

    return {
      irpf,
      ssTrab,
      ssEmpr,
      iva,
      totalAportado,
      tipoEfectivo,
      sanidadRecibida,
      serviciosPublicos,
      totalRecibido,
      saldoPersonal,
      mesesPensionFinanciados,
      mesesMedicoFinanciados,
      alumnosFinanciados,
    };
  }, [salario]);

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6">
      <h3 className="text-xl font-bold text-gray-900 mb-2">
        ¿Qué recibo por mis impuestos?
      </h3>
      <p className="text-sm text-gray-600 mb-6">
        Introduce tu salario bruto y descubre cuánto aportas al Estado, qué recibes a cambio,
        y a cuántos pensionistas, médicos o alumnos financia tu contribución.
      </p>

      {/* Input */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Tu salario bruto anual
        </label>
        <input
          type="range"
          min={0}
          max={400000}
          step={500}
          value={salario}
          onChange={(e) => setSalario(Number(e.target.value))}
          className="w-full accent-primary"
        />
        <div className="flex justify-between items-center text-xs text-gray-500 mt-1">
          <span>0 €</span>
          <input
            type="number"
            min={0}
            max={400000}
            step={500}
            value={salario}
            onChange={(e) => setSalario(Math.min(400000, Math.max(0, Number(e.target.value))))}
            className="w-32 text-center text-base font-semibold text-gray-900 border border-gray-300 rounded-lg px-2 py-1"
          />
          <span>400.000 €</span>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Lo que pagas */}
        <div className="bg-red-50 border border-red-100 rounded-lg p-4">
          <h4 className="text-sm font-semibold text-negative mb-3">Lo que pagas al Estado</h4>
          <div className="space-y-2 text-sm">
            <Row label="IRPF" value={calc.irpf} />
            <Row label="SS trabajador" value={calc.ssTrab} />
            <Row label="SS empresario" value={calc.ssEmpr} />
            <Row label="IVA estimado" value={calc.iva} />
            <div className="border-t border-red-200 pt-2 mt-2">
              <Row label="TOTAL aportado" value={calc.totalAportado} bold />
            </div>
            <p className="text-xs text-gray-500 mt-1">
              Tipo efectivo: <strong>{(calc.tipoEfectivo * 100).toFixed(1)}%</strong> de tu salario bruto
            </p>
          </div>
        </div>

        {/* Lo que recibes */}
        <div className="bg-green-50 border border-green-100 rounded-lg p-4">
          <h4 className="text-sm font-semibold text-positive mb-3">Lo que recibes del Estado</h4>
          <div className="space-y-2 text-sm">
            <Row label="Sanidad pública" value={calc.sanidadRecibida} />
            <Row label="Servicios generales" value={calc.serviciosPublicos} />
            <div className="border-t border-green-200 pt-2 mt-2">
              <Row label="TOTAL recibido" value={calc.totalRecibido} bold />
            </div>
            <div className="mt-3 pt-3 border-t border-green-200">
              <div className={`flex justify-between font-bold ${calc.saldoPersonal >= 0 ? 'text-negative' : 'text-positive'}`}>
                <span>Pagas de más</span>
                <span>{formatEUR(Math.abs(calc.saldoPersonal))}</span>
              </div>
              <p className="text-xs text-gray-500 mt-1">
                {calc.saldoPersonal > 0
                  ? `Aportas ${formatEUR(calc.saldoPersonal)} más de lo que recibes en servicios directos.`
                  : `Recibes ${formatEUR(Math.abs(calc.saldoPersonal))} más de lo que aportas.`}
              </p>
            </div>
          </div>
        </div>

        {/* A qué va tu dinero */}
        <div className="bg-blue-50 border border-blue-100 rounded-lg p-4">
          <h4 className="text-sm font-semibold text-primary mb-3">Tu aportación financia...</h4>
          <div className="space-y-4">
            <Equivalent
              value={calc.mesesPensionFinanciados.toFixed(1)}
              unit="meses"
              description="de una pensión media (1.260 €/mes)"
            />
            <Equivalent
              value={calc.alumnosFinanciados.toFixed(1)}
              unit="alumnos"
              description="de educación pública durante un año (8.293 €/alumno)"
            />
            <Equivalent
              value={calc.mesesMedicoFinanciados.toFixed(1)}
              unit="meses"
              description="de un salario de médico de atención primaria"
            />
          </div>
          <p className="text-xs text-gray-500 mt-4">
            Nota: tu aportación se reparte entre todas las partidas del Estado.
            Estas equivalencias son ilustrativas.
          </p>
        </div>
      </div>

      {/* Perspectiva */}
      {salario >= 40000 && (
        <div className="mt-6 bg-amber-50 border border-amber-200 rounded-lg p-4">
          <p className="text-sm text-amber-800">
            <strong>Perspectiva:</strong> Con un salario de {formatEUR(salario)}, aportas{' '}
            {formatEUR(calc.totalAportado)} al año al Estado. Eso te sitúa en el{' '}
            {salario >= 150000 ? 'top 0,7%' : salario >= 60000 ? 'top 5,6%' : salario >= 30000 ? 'top 27%' : 'top 45%'}{' '}
            de contribuyentes por renta. Recibes a cambio {formatEUR(calc.totalRecibido)} en servicios
            directos estimados — un retorno del {((calc.totalRecibido / calc.totalAportado) * 100).toFixed(0)}%.
            El resto financia pensiones, desempleo, deuda pública y servicios para quienes no pueden contribuir.
          </p>
        </div>
      )}
    </div>
  );
}

function Row({ label, value, bold }: { label: string; value: number; bold?: boolean }) {
  return (
    <div className={`flex justify-between ${bold ? 'font-semibold' : ''}`}>
      <span className="text-gray-700">{label}</span>
      <span className="text-gray-900">{formatEUR(value)}</span>
    </div>
  );
}

function Equivalent({ value, unit, description }: { value: string; unit: string; description: string }) {
  return (
    <div>
      <p className="text-2xl font-bold text-primary">
        {value} <span className="text-sm font-medium text-gray-600">{unit}</span>
      </p>
      <p className="text-xs text-gray-600">{description}</p>
    </div>
  );
}
