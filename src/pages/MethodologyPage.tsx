import SectionTitle from '../components/common/SectionTitle';
import { TRAMOS_IRPF, MINIMO_PERSONAL, SS_TRABAJADOR_PCTG, SS_EMPRESARIO_PCTG, SS_BASE_MAXIMA_ANUAL, TASA_AHORRO, TIPO_IVA_EFECTIVO } from '../data/taxBrackets';
import { GASTO_SANIDAD_PER_CAPITA, GASTO_EDUCACION_POR_ALUMNO, GASTO_SERVICIOS_PUBLICOS_PER_CAPITA } from '../data/spendingData';
import { formatEUR, formatPercent } from '../utils/formatters';
import type { FuenteDatos } from '../types';

const fuentes: FuenteDatos[] = [
  {
    nombre: 'Encuesta Anual de Estructura Salarial',
    institucion: 'INE',
    url: 'https://www.ine.es/dyngs/INEbase/es/operacion.htm?c=Estadistica_C&cid=1254736177025&menu=resultados&idp=1254735976596',
    descripcion: 'Salario bruto medio anual por nacionalidad (española, UE, extra-UE)',
    fechaAcceso: '2025-07',
  },
  {
    nombre: 'Encuesta de Población Activa (EPA)',
    institucion: 'INE',
    url: 'https://www.ine.es/dyngs/INEbase/operacion.htm?c=Estadistica_C&cid=1254736176918&menu=resultados&idp=1254735976595',
    descripcion: 'Tasas de empleo, paro y actividad por nacionalidad y sector',
    fechaAcceso: '2025-07',
  },
  {
    nombre: 'Afiliación de extranjeros',
    institucion: 'Seguridad Social',
    url: 'https://www.seg-social.es/wps/portal/wss/internet/EstadisticasPresupuestosEstudios/Estadisticas/EST8/EST10/EST305/EST307',
    descripcion: 'Número de trabajadores extranjeros afiliados por nacionalidad',
    fechaAcceso: '2025-07',
  },
  {
    nombre: 'Estadística de Gasto Sanitario Público (EGSP)',
    institucion: 'Ministerio de Sanidad',
    url: 'https://www.sanidad.gob.es/estadEstudios/sanidadDatos/tablas/tabla30_1.htm',
    descripcion: 'Gasto sanitario público per cápita por CCAA',
    fechaAcceso: '2025-07',
  },
  {
    nombre: 'Gasto público en educación',
    institucion: 'Ministerio de Educación',
    url: 'https://www.educacionfpydeportes.gob.es/servicios-al-ciudadano/estadisticas/economicas/gasto.html',
    descripcion: 'Gasto público por alumno en enseñanzas no universitarias',
    fechaAcceso: '2025-07',
  },
  {
    nombre: 'Contribución de la población extranjera al PIB per cápita',
    institucion: 'Banco de España',
    url: 'https://www.bde.es/f/webbe/SES/Secciones/Publicaciones/InformesBoletinesRevistas/BoletinEconomico/25/T2/Fich/be2502-art10.pdf',
    descripcion: 'Análisis de la contribución de la inmigración al crecimiento económico 2022-2024',
    fechaAcceso: '2025-07',
    archivoLocal: 'docs/sources/bde-inmigracion-pib-2025.pdf',
  },
  {
    nombre: 'The Fiscal Impact of Immigration (Países Bajos)',
    institucion: 'IZA (Institute of Labor Economics)',
    url: 'https://docs.iza.org/dp17569.pdf',
    descripcion: 'Coste fiscal neto a lo largo de la vida por origen del inmigrante',
    fechaAcceso: '2025-07',
    archivoLocal: 'docs/sources/iza-fiscal-impact-netherlands-2024.pdf',
  },
  {
    nombre: 'Projecting the Net Fiscal Impact of Immigration in the EU',
    institucion: 'JRC / Comisión Europea',
    url: 'https://publications.jrc.ec.europa.eu/repository/bitstream/JRC121937/fiscal_impact_report_final_online.pdf',
    descripcion: 'Modelo de proyección del impacto fiscal de la inmigración en países UE',
    fechaAcceso: '2025-07',
    archivoLocal: 'docs/sources/jrc-fiscal-impact-eu-2020.pdf',
  },
  {
    nombre: 'International Migration Outlook 2025',
    institucion: 'OCDE',
    url: 'https://www.oecd.org/en/publications/international-migration-outlook-2025_ae26c893-en.html',
    descripcion: 'Impacto fiscal neto de la inmigración en países OCDE (-1% a +1% PIB)',
    fechaAcceso: '2025-07',
  },
];

export default function MethodologyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      <SectionTitle
        title="Metodología y fuentes"
        subtitle="Cómo funciona la calculadora, de dónde vienen los datos y cuáles son las limitaciones del modelo."
      />

      {/* Cálculo IRPF */}
      <Section title="Cálculo del IRPF">
        <p>Se aplica la escala general del IRPF (estatal + autonómica general) tras descontar el mínimo personal de {formatEUR(MINIMO_PERSONAL)}.</p>
        <table className="w-full mt-3 text-sm">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-2 font-medium text-gray-700">Desde</th>
              <th className="text-left py-2 font-medium text-gray-700">Hasta</th>
              <th className="text-left py-2 font-medium text-gray-700">Tipo marginal</th>
            </tr>
          </thead>
          <tbody>
            {TRAMOS_IRPF.map((t, i) => (
              <tr key={i} className="border-b border-gray-100">
                <td className="py-1.5">{formatEUR(t.desde)}</td>
                <td className="py-1.5">{t.hasta === Infinity ? 'En adelante' : formatEUR(t.hasta)}</td>
                <td className="py-1.5">{formatPercent(t.tipo)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Section>

      {/* Cotizaciones SS */}
      <Section title="Cotizaciones a la Seguridad Social">
        <ul className="space-y-1 text-sm">
          <li><strong>Trabajador:</strong> {formatPercent(SS_TRABAJADOR_PCTG)} del salario bruto (contingencias comunes, desempleo, FP, MEI)</li>
          <li><strong>Empresario:</strong> {formatPercent(SS_EMPRESARIO_PCTG)} del salario bruto</li>
          <li><strong>Base máxima:</strong> {formatEUR(SS_BASE_MAXIMA_ANUAL)}/año ({formatEUR(SS_BASE_MAXIMA_ANUAL / 12)}/mes)</li>
        </ul>
        <p className="mt-2 text-sm text-gray-600">
          La cotización empresarial se incluye como ingreso fiscal porque es un coste real que el Estado recibe por cada trabajador empleado.
        </p>
      </Section>

      {/* IVA */}
      <Section title="Estimación del IVA">
        <p>No es posible saber el IVA exacto que paga cada hogar. Se estima así:</p>
        <ol className="list-decimal ml-5 mt-2 space-y-1 text-sm">
          <li>Renta disponible = salario bruto - IRPF - cotización del trabajador</li>
          <li>Consumo = renta disponible × {formatPercent(1 - TASA_AHORRO)} (tasa de ahorro: {formatPercent(TASA_AHORRO)})</li>
          <li>IVA pagado = consumo × {formatPercent(TIPO_IVA_EFECTIVO)} (tipo efectivo ponderado)</li>
        </ol>
        <p className="mt-2 text-sm text-gray-600">
          El tipo IVA efectivo del 14% pondera el tipo general (21%), reducido (10%) y superreducido (4%) según la cesta de consumo media.
        </p>
      </Section>

      {/* Costes */}
      <Section title="Estimación de costes para el Estado">
        <ul className="space-y-2 text-sm">
          <li>
            <strong>Sanidad:</strong> {formatEUR(GASTO_SANIDAD_PER_CAPITA)} por persona/año.
            Media nacional del EGSP 2024. Varía significativamente por CCAA.
          </li>
          <li>
            <strong>Educación:</strong> {formatEUR(GASTO_EDUCACION_POR_ALUMNO)} por alumno/año.
            Gasto público medio en enseñanzas no universitarias (2023).
          </li>
          <li>
            <strong>Servicios públicos generales:</strong> {formatEUR(GASTO_SERVICIOS_PUBLICOS_PER_CAPITA)} por persona/año.
            Incluye defensa, seguridad, infraestructuras, administración, servicio de la deuda, medio ambiente, vivienda y cultura.
            Estimación derivada del gasto público total menos sanidad, educación y pensiones.
          </li>
        </ul>
      </Section>

      {/* Limitaciones */}
      <Section title="Limitaciones del modelo">
        <ul className="space-y-2 text-sm text-gray-700">
          <li>
            <strong>Sin variación regional:</strong> Se usan tramos IRPF nacionales. Las CCAA tienen escalas propias que pueden diferir significativamente.
          </li>
          <li>
            <strong>Salarios por nacionalidad aproximados:</strong> El INE no publica salarios medios por país de origen concreto. Las cifras son estimaciones cruzando la EAES con datos de la EPA sobre sectores y cualificación.
          </li>
          <li>
            <strong>Solo empleo formal:</strong> El modelo asume que todos los trabajadores tienen contrato y cotizan. Los trabajadores en economía sumergida pagan IVA pero no IRPF ni cotizaciones.
          </li>
          <li>
            <strong>Solo edad de trabajo:</strong> No se modelan jubilados inmigrantes (que consumirían pensiones) ni la contribución futura a pensiones de los trabajadores actuales.
          </li>
          <li>
            <strong>Promedios, no medianas:</strong> Los salarios medios están distorsionados por valores extremos. La mediana sería más representativa pero menos disponible por nacionalidad.
          </li>
          <li>
            <strong>Sin segundo orden:</strong> No se captura el efecto de la inmigración sobre los salarios nativos, sobre la demanda agregada ni sobre el precio de la vivienda.
          </li>
          <li>
            <strong>Gasto público uniforme:</strong> Se asume el mismo gasto per cápita en servicios públicos para todos los residentes, cuando en realidad varía por CCAA y situación.
          </li>
        </ul>
      </Section>

      {/* Fuentes */}
      <Section title="Fuentes de datos">
        <div className="space-y-3">
          {fuentes.map((f, i) => (
            <div key={i} className="border-l-2 border-primary/30 pl-3">
              <p className="text-sm font-medium text-gray-900">
                <a href={f.url} target="_blank" rel="noopener noreferrer" className="hover:text-primary underline">
                  {f.nombre}
                </a>
              </p>
              <p className="text-xs text-gray-500">{f.institucion} — {f.descripcion}</p>
              {f.archivoLocal && (
                <p className="text-xs text-gray-400">Copia local: {f.archivoLocal}</p>
              )}
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-10">
      <h3 className="text-xl font-semibold text-gray-900 mb-3 border-b border-gray-200 pb-2">{title}</h3>
      <div className="text-gray-700 leading-relaxed">{children}</div>
    </section>
  );
}
