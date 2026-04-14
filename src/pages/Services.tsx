import { motion } from 'motion/react';
import { Bot, Code, Globe, Zap, Shield, BarChart } from 'lucide-react';

const detailedServices = [
  {
    title: "Agentes de IA & Automação",
    icon: <Bot className="w-8 h-8 text-[#00A3FF]" />,
    description: "Desenvolvemos agentes inteligentes que automatizam processos complexos, desde o atendimento ao cliente no WhatsApp até a triagem de leads e agendamentos automáticos.",
    features: ["Integração com WhatsApp/Telegram", "Processamento de Linguagem Natural", "Automação de Fluxos de Trabalho", "Disponibilidade 24/7"]
  },
  {
    title: "Desenvolvimento Web de Alta Performance",
    icon: <Globe className="w-8 h-8 text-[#00A3FF]" />,
    description: "Criamos landing pages e sites institucionais focados em conversão, utilizando as tecnologias mais modernas para garantir velocidade e SEO impecável.",
    features: ["Design Responsivo (Mobile First)", "Otimização de Velocidade", "SEO Avançado", "Copywriting Persuasivo"]
  },
  {
    title: "Web Apps & SaaS Customizados",
    icon: <Code className="w-8 h-8 text-[#00A3FF]" />,
    description: "Sistemas web sob medida para resolver problemas específicos do seu negócio, com foco em escalabilidade, segurança e experiência do usuário.",
    features: ["Arquitetura Escalável", "Dashboards em Tempo Real", "Segurança de Dados", "Integrações via API"]
  }
];

export default function ServicesPage() {
  return (
    <div className="flex-1 py-16 px-6 lg:px-10 max-w-[1200px] mx-auto w-full">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-[40px] md:text-[56px] font-bold mb-6">
          Nossas <span className="text-[#00A3FF]">Soluções</span>
        </h1>
        <p className="text-[#94A3B8] text-lg max-w-2xl mx-auto">
          Transformamos tecnologia em vantagem competitiva. Conheça em detalhes como podemos ajudar sua empresa a escalar.
        </p>
      </motion.div>

      <div className="grid gap-12">
        {detailedServices.map((service, index) => (
          <motion.section
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 border border-white/10 rounded-2xl p-8 lg:p-12 flex flex-col lg:flex-row gap-10 items-center"
          >
            <div className="lg:w-1/3 flex flex-col items-center lg:items-start text-center lg:text-left">
              <div className="w-16 h-16 bg-[#00A3FF]/10 rounded-2xl flex items-center justify-center mb-6">
                {service.icon}
              </div>
              <h2 className="text-2xl font-bold mb-4">{service.title}</h2>
              <p className="text-[#94A3B8] leading-relaxed">
                {service.description}
              </p>
            </div>
            
            <div className="lg:w-2/3 grid sm:grid-cols-2 gap-4 w-full">
              {service.features.map((feature, fIdx) => (
                <div key={fIdx} className="bg-white/5 p-4 rounded-xl border border-white/5 flex items-center gap-3">
                  <Zap className="w-4 h-4 text-[#00A3FF]" />
                  <span className="text-sm font-medium text-gray-200">{feature}</span>
                </div>
              ))}
            </div>
          </motion.section>
        ))}
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="mt-20 p-10 bg-gradient-to-r from-[#00A3FF]/20 to-transparent border border-[#00A3FF]/20 rounded-3xl text-center"
      >
        <h3 className="text-2xl font-bold mb-4">Pronto para dar o próximo passo?</h3>
        <p className="text-[#94A3B8] mb-8">Fale com um de nossos especialistas e descubra qual a melhor solução para o seu momento.</p>
        <a 
          href="https://wa.me/5516997603600"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#00A3FF] text-white px-8 py-4 rounded-xl font-bold shadow-[0_4px_20px_rgba(0,163,255,0.3)] hover:bg-[#00A3FF]/90 transition-all"
        >
          Solicitar Orçamento Gratuito
        </a>
      </motion.div>
    </div>
  );
}
