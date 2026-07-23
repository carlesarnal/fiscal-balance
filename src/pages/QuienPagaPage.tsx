import SectionTitle from '../components/common/SectionTitle';
import FiscalPyramid from '../components/dashboard/FiscalPyramid';

export default function QuienPagaPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      <SectionTitle
        title="¿Quién paga la fiesta?"
        subtitle="De los 49 millones de residentes en España, solo 8-10 millones son contribuyentes fiscales netos. Aquí están los números."
      />
      <FiscalPyramid />
    </div>
  );
}
