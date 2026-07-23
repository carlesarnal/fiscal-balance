import SectionTitle from '../components/common/SectionTitle';
import SalaryChart from '../components/dashboard/SalaryChart';
import AffiliatesChart from '../components/dashboard/AffiliatesChart';
import EmploymentChart from '../components/dashboard/EmploymentChart';
import FiscalBalanceChart from '../components/dashboard/FiscalBalanceChart';
import InternationalChart from '../components/dashboard/InternationalChart';
import SummaryTable from '../components/dashboard/SummaryTable';
import FiscalPyramid from '../components/dashboard/FiscalPyramid';
import PersonalReturn from '../components/dashboard/PersonalReturn';
import PensionProjection from '../components/dashboard/PensionProjection';
import InternationalComparator from '../components/dashboard/InternationalComparator';
import SecondOrderEffects from '../components/dashboard/SecondOrderEffects';
import Conclusions from '../components/dashboard/Conclusions';

export default function DashboardPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      <SectionTitle
        title="Dashboard de datos"
        subtitle="Datos reales sobre fiscalidad, inmigración, pensiones y calidad de servicios públicos en España."
      />

      {/* 1. Pirámide fiscal: quién paga la fiesta */}
      <div className="mb-10">
        <FiscalPyramid />
      </div>

      <hr className="border-gray-200 mb-10" />

      {/* 2. ¿Qué recibo por mis impuestos? */}
      <div className="mb-10">
        <PersonalReturn />
      </div>

      <hr className="border-gray-200 mb-10" />

      {/* 3. Proyección pensiones */}
      <div className="mb-10">
        <PensionProjection />
      </div>

      <hr className="border-gray-200 mb-10" />

      {/* 4. Comparador internacional */}
      <div className="mb-10">
        <InternationalComparator />
      </div>

      <hr className="border-gray-200 mb-10" />

      {/* 5. Saldo fiscal por perfil de inmigrante */}
      <div className="mb-6">
        <SectionTitle
          title="Saldo fiscal por perfil de inmigrante"
          subtitle="Estimación del balance neto anual basado en el salario medio y tamaño de hogar típico de cada colectivo."
        />
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

      {/* 6. Efectos de segundo orden */}
      <div className="mb-10">
        <SecondOrderEffects />
      </div>

      {/* 7. Conclusiones */}
      <Conclusions />
    </div>
  );
}
