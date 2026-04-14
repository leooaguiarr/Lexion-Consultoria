import { motion } from 'motion/react';

const projects = [
  {
    title: "MedCenter Auto",
    icon: "◈",
    tags: ["IA", "SAÚDE"]
  },
  {
    title: "Lumina Real Estate",
    icon: "◇",
    tags: ["WEB", "UX"]
  },
  {
    title: "FinTrack Dashboard",
    icon: "◆",
    tags: ["APP", "SAAS"]
  }
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="flex flex-col">
      <div className="text-[12px] uppercase tracking-[2px] text-[#00A3FF] mb-3 font-bold">
        Projetos Recentes
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-[#111827] rounded-xl overflow-hidden border border-white/5 flex flex-col"
          >
            <div className="h-[90px] bg-gradient-to-tr from-slate-800 to-slate-900 flex items-center justify-center opacity-50 relative overflow-hidden">
              <span className="text-2xl text-white font-bold">{project.icon}</span>
            </div>
            
            <div className="p-3 flex-1 flex flex-col">
              <h4 className="text-[13px] mb-1 font-bold text-white">
                {project.title}
              </h4>
              <div className="flex flex-wrap gap-1 mt-2">
                {project.tags.map((tag, idx) => (
                  <span 
                    key={idx} 
                    className="text-[9px] bg-[rgba(0,163,255,0.1)] text-[#00A3FF] px-1.5 py-0.5 rounded uppercase font-bold"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
