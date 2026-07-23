import { Link } from 'react-router';

export default function IntroPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-3xl sm:text-5xl font-bold mb-6 leading-tight">
            Saldo Fiscal de la Inmigración en España
          </h1>
          <p className="text-lg sm:text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            ¿Aportan los inmigrantes más de lo que cuestan al Estado? Explora los datos
            reales y calcula el balance fiscal de distintos perfiles.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/calculadora"
              className="px-8 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-blue-50 transition-colors"
            >
              Ir a la calculadora
            </Link>
            <Link
              to="/dashboard"
              className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
            >
              Ver el dashboard
            </Link>
          </div>
        </div>
      </section>

      {/* Qué es el saldo fiscal */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
            ¿Qué es el saldo fiscal?
          </h2>
          <div className="prose prose-lg text-gray-700 space-y-4">
            <p>
              El <strong>saldo fiscal neto</strong> de un individuo o colectivo es la diferencia entre
              lo que aporta al Estado (impuestos, cotizaciones sociales, IVA) y lo que recibe
              del Estado (sanidad, educación, servicios públicos, prestaciones sociales).
            </p>
            <p>
              Si el saldo es <span className="text-positive font-semibold">positivo</span>,
              la persona contribuye más de lo que cuesta.
              Si es <span className="text-negative font-semibold">negativo</span>,
              recibe más de lo que aporta.
            </p>
            <p className="text-gray-500 text-base">
              Importante: el saldo fiscal no es lo mismo que el impacto económico. Un trabajador
              puede tener un saldo fiscal negativo pero generar empleo, actividad económica y
              crecimiento del PIB. Son cosas distintas.
            </p>
          </div>
        </div>
      </section>

      {/* Tres columnas */}
      <section className="py-16 bg-surface">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Calcula</h3>
              <p className="text-gray-600 text-sm">
                Introduce un salario, tamaño familiar y perfil, y obtén una estimación del
                saldo fiscal neto del hogar.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-positive" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Explora</h3>
              <p className="text-gray-600 text-sm">
                Visualiza datos reales de salarios, empleo y afiliación por nacionalidad,
                con comparaciones internacionales.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-neutral" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Comprende</h3>
              <p className="text-gray-600 text-sm">
                Entiende la metodología, las fuentes y las limitaciones. Sin datos no hay
                debate riguroso.
              </p>
            </div>
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
              España no dispone de un estudio oficial que calcule el saldo fiscal neto por
              nacionalidad de origen. Esta herramienta utiliza datos públicos del INE, la
              Seguridad Social y estudios académicos para construir una <strong>estimación
              razonable</strong>, no una cifra exacta. Los salarios medios por nacionalidad
              específica son aproximaciones, ya que el INE solo distingue entre española, UE
              y extra-UE. Consulta la{' '}
              <Link to="/metodologia" className="text-amber-900 underline font-medium">
                sección de metodología
              </Link>{' '}
              para más detalles.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
