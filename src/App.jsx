import { Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

const AmbienceGrid = lazy(() => import('./components/AmbienceGrid'));
const MenuHighlights = lazy(() => import('./components/MenuHighlights'));
const InfoLocation = lazy(() => import('./components/InfoLocation'));
const Footer = lazy(() => import('./components/Footer'));

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-btq-dark text-btq-white font-sans selection:bg-gray-700 selection:text-white">
      <Navbar />
      <Hero />
      <Suspense fallback={<div className="py-20 text-center">Carregando...</div>}>
        <AmbienceGrid />
        <MenuHighlights />
        <InfoLocation />
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
