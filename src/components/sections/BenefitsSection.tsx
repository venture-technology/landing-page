import { motion } from 'framer-motion'
import { Shield, Clock, DollarSign, Users, Smartphone, TrendingUp } from 'lucide-react'
import Heading from '../base/Heading'
import Icon from '../base/Icon'
import Section from '../base/Section'

const benefits = [
  {
    icon: Shield,
    title: 'Maior Segurança',
    description: 'Localização em tempo real de todos os veículos e alunos, garantindo tranquilidade para pais e escolas.',
  },
  {
    icon: Clock,
    title: 'Economia de Tempo',
    description: 'Elimine ligações diárias e confirmações manuais. Tudo é automatizado e acessível pelo app.',
  },
  {
    icon: DollarSign,
    title: 'Pagamento Fácil',
    description: 'Transparencia total nos valores, com opções de pagamento por boleto ou cartão de crédito.',
  },
  {
    icon: Users,
    title: 'Comunicação Eficiente',
    description: 'Canal direto entre responsáveis, escolas e motoristas, reduzindo ruídos e mal-entendidos.',
  },
  {
    icon: Smartphone,
    title: '100% Digital',
    description: 'Toda a gestão feita pelo aplicativo, sem necessidade de papéis ou processos burocráticos.',
  },
  {
    icon: TrendingUp,
    title: 'Crescimento Profissional',
    description: 'Motoristas podem expandir sua base de clientes e escolas otimizar o transporte.',
  },
]

const BenefitsSection = () => {
  return (
    <Section id="benefits" background="gray" className="py-20 md:py-28">
      <div className="text-center mb-16">
        <Heading level={2} align="center" className="mb-4">
          Por que Escolher o
          <span className="text-brand-600 block">Venture?</span>
        </Heading>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Uma solução completa que transforma o transporte escolar em uma experiência simples e segura para todos.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {benefits.map((benefit, index) => (
          <motion.div
            key={benefit.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300"
          >
            <div className="p-4 bg-brand-50 rounded-xl w-fit mb-6">
              <Icon icon={benefit.icon} className="text-brand-600" size={32} />
            </div>
            <h4 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h4>
            <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}

export default BenefitsSection
