import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Benefits from './components/Benefits';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#05070A] text-white font-sans relative overflow-x-hidden flex flex-col selection:bg-[#00A3FF]/30">
      <div className="absolute top-[-100px] right-[-100px] w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(0,163,255,0.3)_0%,transparent_70%)] z-0 pointer-events-none" />
      <Header />
      <main className="flex-1 grid lg:grid-cols-[440px_1fr] gap-8 p-6 lg:p-10 z-10 max-w-[1440px] mx-auto w-full">
        <div className="flex flex-col justify-center">
          <Hero />
        </div>
        <div className="flex flex-col gap-8 justify-center">
          <Services />
          <Portfolio />
        </div>
      </main>
      <Benefits />
      <Footer />
    </div>
  );
}
