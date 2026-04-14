import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion } from 'motion/react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="flex justify-between items-center px-6 lg:px-10 h-[80px] bg-[#05070A]/80 backdrop-blur-[10px] border-b border-white/5 z-20 relative">
      {/* Logo */}
      <Link to="/" className="flex items-center text-white">
        <img src="/logo_lexion.png" alt="Lexion Logo" className="h-[60px] w-auto object-contain" />
        <span className="font-['Orbitron'] font-semibold text-[30px] tracking-[0.15em] leading-[40px] flex items-center text-left">
          LEXION
        </span>
      </Link>

      {/* Desktop Nav */}
      <nav className="hidden md:flex gap-8 items-center">
        <Link to="/servicos" className="text-[#94A3B8] text-sm font-medium hover:text-[#00A3FF] transition-colors">Serviços</Link>
        <a href="#portfolio" className="text-[#94A3B8] text-sm font-medium hover:text-[#00A3FF] transition-colors">Portfólio</a>
        <a href="#contato" className="text-[#94A3B8] text-sm font-medium hover:text-[#00A3FF] transition-colors">Sobre</a>
        <a 
          href="https://wa.me/5516997603600"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-transparent border border-[#00A3FF] text-[#00A3FF] px-4 py-2 rounded-md text-sm font-semibold cursor-pointer hover:bg-[#00A3FF]/10 transition-colors inline-block"
        >
          Falar com um Especialista
        </a>
      </nav>

      {/* Mobile Menu Toggle */}
      <button
        className="md:hidden text-[#94A3B8] hover:text-[#00A3FF]"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 right-0 bg-[#05070A] border-b border-white/5 py-4 px-6 flex flex-col gap-4 shadow-2xl z-20"
        >
          <Link to="/servicos" className="text-[#94A3B8] hover:text-[#00A3FF] py-2 font-medium" onClick={() => setIsMobileMenuOpen(false)}>Serviços</Link>
          <a href="#portfolio" className="text-[#94A3B8] hover:text-[#00A3FF] py-2 font-medium" onClick={() => setIsMobileMenuOpen(false)}>Portfólio</a>
          <a href="#contato" className="text-[#94A3B8] hover:text-[#00A3FF] py-2 font-medium" onClick={() => setIsMobileMenuOpen(false)}>Sobre</a>
          <a
            href="https://wa.me/5516997603600"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 text-center px-4 py-2 rounded-md border border-[#00A3FF] text-[#00A3FF] font-semibold text-sm hover:bg-[#00A3FF]/10 transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Falar com um Especialista
          </a>
        </motion.div>
      )}
    </header>
  );
}
