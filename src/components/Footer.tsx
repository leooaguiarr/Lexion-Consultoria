export default function Footer() {
  return (
    <footer id="contato" className="py-4 px-6 lg:px-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] text-[#94A3B8]">
      <div>
        &copy; {new Date().getFullYear()} Lexion Technology Consulting. Todos os direitos reservados.
      </div>
      <div className="flex flex-col md:flex-row items-center gap-5">
        <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
          <input 
            type="text" 
            placeholder="Seu WhatsApp" 
            className="bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded px-3 py-1.5 text-white text-[12px] w-[180px] focus:outline-none focus:border-[#00A3FF] transition-all"
          />
          <button 
            type="submit"
            className="bg-[#00A3FF] text-white px-3 py-1.5 rounded font-bold text-[11px] shadow-[0_4px_20px_rgba(0,163,255,0.3)] hover:bg-[#00A3FF]/90 transition-colors"
          >
            Enviar
          </button>
        </form>
        <div className="flex gap-4">
          <span className="hover:text-[#00A3FF] cursor-pointer transition-colors">LinkedIn</span>
          <span className="hover:text-[#00A3FF] cursor-pointer transition-colors">Instagram</span>
          <span className="hover:text-[#00A3FF] cursor-pointer transition-colors">X</span>
        </div>
      </div>
    </footer>
  );
}
