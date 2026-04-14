import Hero from '../components/Hero';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';

export default function Home() {
  return (
    <main className="flex-1 grid lg:grid-cols-[440px_1fr] gap-8 p-6 lg:p-10 z-10 max-w-[1440px] mx-auto w-full">
      <div className="flex flex-col justify-center">
        <Hero />
      </div>
      <div className="flex flex-col gap-8 justify-center">
        <Services />
        <Portfolio />
      </div>
    </main>
  );
}
