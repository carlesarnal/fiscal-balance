export default function SecondOrderEffects() {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 sm:p-8">
      <h3 className="text-xl font-bold text-gray-900 mb-2">
        Efectos de segundo orden: lo que esta calculadora no captura
      </h3>
      <p className="text-sm text-gray-600 mb-6">
        El saldo fiscal directo es solo una parte de la ecuación. La inmigración tiene efectos
        indirectos sobre la economía que pueden ser tanto positivos como negativos, y que no se
        reflejan en un cálculo de impuestos menos servicios.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <EffectCard
          title="Efecto sobre los salarios nativos"
          direction="mixed"
          description="La evidencia académica es mixta. En sectores con escasez de mano de obra (agricultura, hostelería, cuidados), la inmigración cubre puestos que los nativos no ocupan, sin efecto negativo sobre salarios. En sectores saturados, una mayor oferta de mano de obra poco cualificada puede presionar salarios a la baja. Estudios del Banco de España sugieren un efecto pequeño y concentrado en los deciles más bajos."
          sources="Banco de España, 2025; De la Rica et al., 2015"
        />

        <EffectCard
          title="Efecto sobre la demanda agregada"
          direction="positive"
          description="Cada residente adicional consume bienes y servicios: alquiler, alimentación, transporte, ocio. Eso genera actividad económica, empleo en comercio y servicios, y recaudación por IVA e impuestos de sociedades. El Banco de España estima que la inmigración reciente contribuyó 0,4-0,7 puntos porcentuales al crecimiento del PIB per cápita entre 2022 y 2024."
          sources="Banco de España, Boletín Económico 2025/T2"
        />

        <EffectCard
          title="Efecto sobre el precio de la vivienda"
          direction="negative"
          description="Una mayor demanda de vivienda — especialmente de alquiler en grandes ciudades — presiona los precios al alza. Esto afecta a todos los residentes, incluidos los nativos, y es probablemente el efecto de segundo orden más visible y políticamente sensible. No existe un cálculo preciso de cuánto del aumento del alquiler es atribuible a la inmigración frente a otros factores (tipos de interés, inversión especulativa, regulación)."
          sources="Banco de España; observatorios de vivienda"
        />

        <EffectCard
          title="Sostenimiento del sistema de pensiones"
          direction="positive"
          description="Con un ratio de 2,44 cotizantes por pensionista (era 2,7 en 2008), el sistema de pensiones necesita más contribuyentes. Los inmigrantes en edad de trabajo amplían la base cotizante. Este efecto es positivo a corto y medio plazo, aunque a largo plazo esos mismos trabajadores serán pensionistas."
          sources="Seguridad Social, 2024; AIReF"
        />

        <EffectCard
          title="Efecto sobre servicios públicos"
          direction="negative"
          description="Una mayor población sin una inversión proporcional en infraestructuras genera presión sobre sanidad, educación y transporte. Las listas de espera crecen, las aulas se saturan y el transporte se congestiona. Este efecto no se mide en euros, pero lo perciben los residentes como deterioro de la calidad de los servicios."
          sources="Datos de comunidades autónomas; percepción ciudadana"
        />

        <EffectCard
          title="Efecto fiscal indirecto"
          direction="positive"
          description="Los inmigrantes empleados permiten a empresas españolas ser más competitivas (costes laborales menores en ciertos sectores), lo que genera más beneficios empresariales y, por tanto, más recaudación por Impuesto de Sociedades. Además, su consumo genera IVA adicional más allá de lo que esta calculadora ya estima."
          sources="Análisis sectorial; FUNCAS"
        />
      </div>

      <div className="mt-6 bg-gray-50 border border-gray-200 rounded-lg p-4">
        <p className="text-sm text-gray-700">
          <strong>En resumen:</strong> el debate sobre inmigración que se limita al saldo fiscal
          directo ignora efectos que pueden ser más grandes que el propio saldo. Un trabajador con
          saldo fiscal negativo de -2.000 € puede generar 15.000 € en actividad económica adicional.
          Un jubilado europeo con saldo fiscal muy negativo puede estar sosteniendo la economía de
          un municipio costero entero. Los números de la calculadora son una parte de la verdad, no
          toda la verdad.
        </p>
      </div>
    </div>
  );
}

function EffectCard({
  title,
  direction,
  description,
  sources,
}: {
  title: string;
  direction: 'positive' | 'negative' | 'mixed';
  description: string;
  sources: string;
}) {
  const colors = {
    positive: { bg: 'bg-green-50', border: 'border-green-200', badge: 'bg-green-100 text-green-800', label: 'Generalmente positivo' },
    negative: { bg: 'bg-red-50', border: 'border-red-200', badge: 'bg-red-100 text-red-800', label: 'Generalmente negativo' },
    mixed: { bg: 'bg-amber-50', border: 'border-amber-200', badge: 'bg-amber-100 text-amber-800', label: 'Mixto / depende' },
  };

  const c = colors[direction];

  return (
    <div className={`${c.bg} ${c.border} border rounded-lg p-4`}>
      <div className="flex items-start justify-between mb-2">
        <h4 className="text-sm font-semibold text-gray-900 leading-tight">{title}</h4>
      </div>
      <span className={`inline-block text-xs font-medium px-2 py-0.5 rounded-full ${c.badge} mb-2`}>
        {c.label}
      </span>
      <p className="text-xs text-gray-700 leading-relaxed">{description}</p>
      <p className="text-xs text-gray-400 mt-2">Fuentes: {sources}</p>
    </div>
  );
}
