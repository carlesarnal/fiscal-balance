import SectionTitle from '../components/common/SectionTitle';
import PersonalReturn from '../components/dashboard/PersonalReturn';

export default function TusImpuestosPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      <SectionTitle
        title="¿Qué recibo por mis impuestos?"
        subtitle="Introduce tu salario y descubre cuánto pagas al Estado, cuánto recibes en servicios, y a cuántos pensionistas financias."
      />
      <PersonalReturn />
    </div>
  );
}
