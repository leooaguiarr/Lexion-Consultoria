import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Benefits from './components/Benefits';
import Footer from './components/Footer';
import Home from './pages/Home';
import ServicesPage from './pages/Services';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-[#05070A] text-white font-sans relative overflow-x-hidden flex flex-col selection:bg-[#00A3FF]/30">
        <div className="absolute top-[-100px] right-[-100px] w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(0,163,255,0.3)_0%,transparent_70%)] z-0 pointer-events-none" />
        <Header />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/servicos" element={<ServicesPage />} />
        </Routes>

        <Benefits />
        <Footer />
      </div>
    </Router>
  );
}
