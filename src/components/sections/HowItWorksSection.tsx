import { motion } from 'framer-motion'
import { Search, CheckCircle, Smartphone, Check } from 'lucide-react'
import Heading from '../base/Heading'
import Section from '../base/Section'

const steps = [
  {
    number: '01',
    icon: Smartphone,
    title: 'Cadastre-se',
    description: 'Baixe o aplicativo e crie sua conta em minutos. É simples, rápido e gratuito.',
  },
  {
    number: '02',
    icon: Search,
    title: 'Encontre o que Precisa',
    description: 'Pesquise motoristas disponíveis, convide parceiros ou receba convites de escolas.',
  },
  {
    number: '03',
    icon: CheckCircle,
    title: 'Configure o Serviço',
    description: 'Defina rotas, valores, distâncias e configure tudo de acordo com sua necessidade.',
  },
  {
    number: '04',
    icon: Check,
    title: 'Comece a Usar',
    description: 'Confirme contratos e aproveite toda a facilidade do transporte escolar organizado.',
  },
]

const HowItWorksSection = () => {
  return (
    <Section id="how-it-works" background="white" className="py-20 md:py-28">
      <div className="text-center mb-16">
        <Heading level={2} align="center" className="mb-4">
          Como Funciona
        </Heading>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Em apenas 4 passos simples você já pode começar a aproveitar todas as funcionalidades do Venture.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step, index) => (
          <motion.div
            key={step.number}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative"
          >
            {/* Connection Line (Desktop) */}
            {index < steps.length - 1 && (
              <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-brand-200 to-transparent" />
            )}

            <div className="text-center">
              {/* Step Number */}
              <div className="relative inline-flex items-center justify-center w-24 h-24 mx-auto mb-6">
                <div className="absolute inset-0 bg-brand-100 rounded-full" />
                <div className="relative z-10 text-3xl font-bold text-brand-600">
                  {step.number}
                </div>
              </div>

              {/* Icon */}
              <div className="p-4 bg-brand-50 rounded-xl w-fit mx-auto mb-4">
                <step.icon className="text-brand-600" size={32} />
              </div>

              {/* Content */}
              <h4 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h4>
              <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Mobile Scroll Indicator */}
      <div className="mt-12 text-center md:hidden">
        <p className="text-sm text-gray-500">Role para ver todos os passos</p>
        <div className="w-6 h-10 border-2 border-gray-300 rounded-full mx-auto mt-2 flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-gray-400 rounded-full animate-bounce" />
        </div>
      </div>
    </Section>
  )
}

export default HowItWorksSection
