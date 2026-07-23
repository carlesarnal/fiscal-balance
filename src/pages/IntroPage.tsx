import { Link } from 'react-router';

export default function IntroPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-3xl sm:text-5xl font-bold mb-6 leading-tight">
            Radiografía Fiscal de España
          </h1>
          <p className="text-lg sm:text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            ¿Quién paga, quién recibe y cuánto te devuelven por tus impuestos?
            Datos reales, sin opinión. Decide tú.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/quien-paga"
              className="px-8 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-blue-50 transition-colors"
            >
              ¿Quién paga la fiesta?
            </Link>
            <Link
              to="/tus-impuestos"
              className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
            >
              ¿Qué recibo por mis impuestos?
            </Link>
          </div>
        </div>
      </section>

      {/* Qué es esto */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
            ¿Qué encontrarás aquí?
          </h2>
          <div className="prose prose-lg text-gray-700 space-y-4">
            <p>
              Esta herramienta reúne datos públicos de la <strong>Agencia Tributaria</strong>,
              el <strong>INE</strong>, la <strong>Seguridad Social</strong>, el{' '}
              <strong>Banco de España</strong> y la <strong>OCDE</strong> para responder
              preguntas que raramente se contestan con números:
            </p>
            <ul className="list-disc ml-5 space-y-1 text-base">
              <li>¿Cuántas personas sostienen fiscalmente a las demás?</li>
              <li>¿Cuánto pago yo y qué recibo a cambio?</li>
              <li>¿Aguantarán las pensiones?</li>
              <li>¿Pagamos mucho o recibimos poco comparado con Europa?</li>
              <li>¿Cuál es el saldo fiscal real de la inmigración?</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Secciones */}
      <section className="py-16 bg-surface">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <SectionCard
              to="/quien-paga"
              color="blue"
              icon={<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />}
              title="Quién paga"
              description="La pirámide fiscal de España: de 49 millones, solo 8-10 millones son contribuyentes netos. Quién paga el IRPF, cuánto, y quién no."
            />
            <SectionCard
              to="/tus-impuestos"
              color="red"
              icon={<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />}
              title="Tus impuestos"
              description="Introduce tu salario y descubre cuánto aportas, cuánto recibes, y a cuántos pensionistas, alumnos o médicos financias."
            />
            <SectionCard
              to="/pensiones"
              color="amber"
              icon={<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />}
              title="Pensiones"
              description="El ratio cotizantes/pensionista se desploma con el baby boom. Proyecciones hasta 2050 con y sin inmigración."
            />
            <SectionCard
              to="/espana-vs-europa"
              color="purple"
              icon={<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />}
              title="España vs Europa"
              description="Presión fiscal, sanidad, educación, corrupción e infraestructuras. España comparada con 8 países europeos."
            />
            <SectionCard
              to="/inmigracion"
              color="green"
              icon={<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />}
              title="Inmigración"
              description="Saldo fiscal por nacionalidad, datos de empleo y salarios, efectos de segundo orden y comparación internacional."
            />
            <SectionCard
              to="/metodologia"
              color="gray"
              icon={<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />}
              title="Metodología"
              description="Cómo se calculan los datos, de dónde salen, qué limitaciones tiene el modelo y enlaces a las fuentes originales."
            />
          </div>
        </div>
      </section>

      {/* Aviso */}
      <section className="py-12 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-amber-900 mb-2">
              Aviso sobre los datos
            </h3>
            <p className="text-amber-800 text-sm leading-relaxed">
              Esta herramienta utiliza datos públicos oficiales para construir{' '}
              <strong>estimaciones razonables</strong>, no cifras exactas. Los cálculos
              individuales usan promedios nacionales y no sustituyen un análisis fiscal
              personalizado. Algunas cifras (salarios por nacionalidad concreta, gasto en
              servicios públicos generales) son aproximaciones derivadas de fuentes oficiales
              que no las desglosan directamente. Consulta la{' '}
              <Link to="/metodologia" className="text-amber-900 underline font-medium">
                metodología
              </Link>{' '}
              para los detalles.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

const colorClasses: Record<string, { bg: string; icon: string }> = {
  blue: { bg: 'bg-blue-100', icon: 'text-primary' },
  red: { bg: 'bg-red-100', icon: 'text-negative' },
  amber: { bg: 'bg-amber-100', icon: 'text-neutral' },
  purple: { bg: 'bg-purple-100', icon: 'text-purple-600' },
  green: { bg: 'bg-green-100', icon: 'text-positive' },
  gray: { bg: 'bg-gray-100', icon: 'text-gray-600' },
};

function SectionCard({ to, color, icon, title, description }: {
  to: string; color: string; icon: React.ReactNode; title: string; description: string;
}) {
  const c = colorClasses[color];
  return (
    <Link to={to} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:border-gray-200 transition-all group">
      <div className={`w-12 h-12 ${c.bg} rounded-lg flex items-center justify-center mb-4`}>
        <svg className={`w-6 h-6 ${c.icon}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          {icon}
        </svg>
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-primary transition-colors">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </Link>
  );
}
