import SectionTitle from '../components/common/SectionTitle';
import FiscalBalanceChart from '../components/dashboard/FiscalBalanceChart';
import SummaryTable from '../components/dashboard/SummaryTable';
import SalaryChart from '../components/dashboard/SalaryChart';
import EmploymentChart from '../components/dashboard/EmploymentChart';
import AffiliatesChart from '../components/dashboard/AffiliatesChart';
import InternationalChart from '../components/dashboard/InternationalChart';
import SecondOrderEffects from '../components/dashboard/SecondOrderEffects';
import Conclusions from '../components/dashboard/Conclusions';
import { Link } from 'react-router';

export default function InmigracionPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      <SectionTitle
        title="Inmigración y saldo fiscal"
        subtitle="Estimación del balance fiscal neto por nacionalidad, datos de empleo y salarios, y efectos económicos más allá de los impuestos."
      />

      {/* Link a la calculadora */}
      <div className="mb-8 bg-blue-50 border border-blue-200 rounded-xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <p className="text-sm text-blue-800">
          <strong>Calculadora interactiva:</strong> introduce los datos de cualquier hogar y calcula su saldo fiscal neto.
        </p>
        <Link
          to="/calculadora"
          className="px-5 py-2 bg-primary text-white text-sm font-semibold rounded-lg hover:bg-primary-dark transition-colors shrink-0"
        >
          Abrir calculadora
        </Link>
      </div>

      {/* Saldo fiscal por perfil */}
      <div className="mb-6">
        <FiscalBalanceChart />
      </div>

      <div className="mb-6">
        <SummaryTable />
      </div>

      <div className="grid lg:grid-cols-2 gap-6 mb-10">
        <SalaryChart />
        <EmploymentChart />
        <AffiliatesChart />
        <InternationalChart />
      </div>

      <hr className="border-gray-200 mb-10" />

      <div className="mb-10">
        <SecondOrderEffects />
      </div>

      <Conclusions />
    </div>
  );
}
