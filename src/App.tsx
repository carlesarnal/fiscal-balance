import { HashRouter, Routes, Route } from 'react-router';
import Layout from './components/layout/Layout';
import IntroPage from './pages/IntroPage';
import QuienPagaPage from './pages/QuienPagaPage';
import TusImpuestosPage from './pages/TusImpuestosPage';
import PensionesPage from './pages/PensionesPage';
import EspanaVsEuropaPage from './pages/EspanaVsEuropaPage';
import InmigracionPage from './pages/InmigracionPage';
import CalculatorPage from './pages/CalculatorPage';
import MethodologyPage from './pages/MethodologyPage';

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<IntroPage />} />
          <Route path="quien-paga" element={<QuienPagaPage />} />
          <Route path="tus-impuestos" element={<TusImpuestosPage />} />
          <Route path="pensiones" element={<PensionesPage />} />
          <Route path="espana-vs-europa" element={<EspanaVsEuropaPage />} />
          <Route path="inmigracion" element={<InmigracionPage />} />
          <Route path="calculadora" element={<CalculatorPage />} />
          <Route path="metodologia" element={<MethodologyPage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}
