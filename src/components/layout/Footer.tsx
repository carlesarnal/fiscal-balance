export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center text-sm text-gray-500 space-y-2">
          <p className="font-medium text-gray-700">
            Herramienta de estimación fiscal — No es un estudio oficial
          </p>
          <p>
            Datos procedentes de INE, Seguridad Social, Banco de España, OCDE y estudios académicos.
          </p>
          <p>
            Los resultados son aproximaciones basadas en promedios nacionales y no sustituyen un análisis fiscal individualizado.
          </p>
        </div>
      </div>
    </footer>
  );
}
