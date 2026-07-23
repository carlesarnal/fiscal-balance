import SectionTitle from '../components/common/SectionTitle';
import PensionProjection from '../components/dashboard/PensionProjection';

export default function PensionesPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      <SectionTitle
        title="El futuro de las pensiones"
        subtitle="La generación del baby boom empieza a jubilarse. Proyecciones del ratio cotizantes/pensionista hasta 2050."
      />
      <PensionProjection />
    </div>
  );
}
