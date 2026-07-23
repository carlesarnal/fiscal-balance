import SectionTitle from '../components/common/SectionTitle';
import InternationalComparator from '../components/dashboard/InternationalComparator';

export default function EspanaVsEuropaPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      <SectionTitle
        title="España vs Europa"
        subtitle="¿Pagamos mucho o recibimos poco? Presión fiscal, sanidad, educación, corrupción e infraestructuras comparadas."
      />
      <InternationalComparator />
    </div>
  );
}
