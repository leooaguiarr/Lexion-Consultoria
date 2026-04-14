import { motion } from 'motion/react';

const services = [
  {
    icon: "AI",
    title: "Agentes & Automação",
    description: "Chatbots inteligentes para WhatsApp e agendamentos automáticos 24/7."
  },
  {
    icon: "WEB",
    title: "Desenvolvimento Web",
    description: "Landing pages focadas em conversão e sites institucionais modernos."
  },
  {
    icon: "APP",
    title: "Web Apps Custom",
    description: "Sistemas sob medida para gestão e escalabilidade do seu negócio."
  }
];

export default function Services() {
  return (
    <section id="servicos" className="flex flex-col">
      <div className="text-[12px] uppercase tracking-[2px] text-[#00A3FF] mb-3 font-bold">
        Nossos Serviços
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-[rgba(11,15,25,0.8)] border border-white/10 rounded-xl p-4 backdrop-blur-md hover:border-[#00A3FF] transition-colors"
          >
            <div className="w-8 h-8 bg-[rgba(0,163,255,0.3)] rounded-md mb-3 flex items-center justify-center text-[#00A3FF] font-bold text-[10px]">
              {service.icon}
            </div>
            
            <h3 className="text-[15px] mb-2 font-bold text-white">
              {service.title}
            </h3>
            
            <p className="text-[12px] text-[#94A3B8] leading-[1.4]">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
