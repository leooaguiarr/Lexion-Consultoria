import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="flex flex-col justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-[48px] leading-[1.1] mb-4 font-bold">
          Escale seu negócio com <span className="text-[#00A3FF]">Inteligência Artificial</span>
        </h1>
        
        <p className="text-[#94A3B8] text-[18px] leading-[1.6] mb-8">
          Criamos agentes de IA personalizados e aplicações web de alta performance para empresas que buscam dominância digital.
        </p>
        
        <div className="flex flex-wrap gap-3">
          <a
            href="https://wa.me/5516997603600"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#00A3FF] text-white px-6 py-3.5 rounded-lg font-bold shadow-[0_4px_20px_rgba(0,163,255,0.3)] hover:bg-[#00A3FF]/90 transition-colors"
          >
            Agendar Consultoria Gratuita
          </a>
          <Link
            to="/servicos"
            className="bg-white/5 border border-white/10 text-white px-6 py-3.5 rounded-lg font-semibold hover:bg-white/10 transition-colors"
          >
            Ver Serviços
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
