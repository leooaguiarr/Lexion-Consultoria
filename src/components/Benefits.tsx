import { motion } from 'motion/react';

export default function Benefits() {
  return (
    <div className="flex flex-wrap lg:flex-nowrap justify-between gap-4 bg-[rgba(255,255,255,0.03)] py-4 px-6 lg:px-10 border-t border-white/5">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0 }}
        className="flex items-center gap-2 text-[12px] text-[#94A3B8] font-medium"
      >
        <span className="w-1.5 h-1.5 bg-[#00A3FF] rounded-full shadow-[0_0_10px_#00A3FF]" />
        <span><b className="text-white font-medium">Redução</b> de custos operacionais</span>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="flex items-center gap-2 text-[12px] text-[#94A3B8] font-medium"
      >
        <span className="w-1.5 h-1.5 bg-[#00A3FF] rounded-full shadow-[0_0_10px_#00A3FF]" />
        <span><b className="text-white font-medium">Atendimento</b> humanizado 24/7</span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="flex items-center gap-2 text-[12px] text-[#94A3B8] font-medium"
      >
        <span className="w-1.5 h-1.5 bg-[#00A3FF] rounded-full shadow-[0_0_10px_#00A3FF]" />
        <span><b className="text-white font-medium">Aumento</b> na taxa de conversão</span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.3 }}
        className="flex items-center gap-2 text-[12px] text-[#94A3B8] font-medium"
      >
        <span className="w-1.5 h-1.5 bg-[#00A3FF] rounded-full shadow-[0_0_10px_#00A3FF]" />
        <span><b className="text-white font-medium">Tecnologia</b> de ponta (Edge)</span>
      </motion.div>
    </div>
  );
}
