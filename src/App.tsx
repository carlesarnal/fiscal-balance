import { HashRouter, Routes, Route } from 'react-router';
import Layout from './components/layout/Layout';
import IntroPage from './pages/IntroPage';
import CalculatorPage from './pages/CalculatorPage';
import DashboardPage from './pages/DashboardPage';
import MethodologyPage from './pages/MethodologyPage';

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<IntroPage />} />
          <Route path="calculadora" element={<CalculatorPage />} />
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="metodologia" element={<MethodologyPage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}
