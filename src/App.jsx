import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AmbienceGrid from './components/AmbienceGrid';
import MenuHighlights from './components/MenuHighlights';
import InfoLocation from './components/InfoLocation';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-btq-dark text-btq-white font-sans selection:bg-gray-700 selection:text-white">
      <Navbar />
      <Hero />
      <AmbienceGrid />
      <MenuHighlights />
      <InfoLocation />
      <Footer />
    </div>
  );
}

export default App;
