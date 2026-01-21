import { motion } from 'framer-motion'
import Button from '../base/Button'
import Heading from '../base/Heading'
import Section from '../base/Section'

export interface CTASectionProps {
  onContactClick?: () => void
}

const CTASection = ({ onContactClick }: CTASectionProps) => {
  return (
    <Section id="cta" background="brand" className="py-20 md:py-28">
      <div className="text-center max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Heading level={2} align="center" className="mb-6 text-white">
            Pronto para Transformar
            <span className="block">o Transporte Escolar?</span>
          </Heading>
          <p className="text-xl text-brand-100 mb-10 leading-relaxed">
            Junte-se a milhares de responsáveis, escolas e motoristas que já simplificaram suas rotinas diárias com o Venture.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-brand-600"
              onClick={onContactClick}
            >
              Fale Conosco
            </Button>
          </div>

          {/* Additional Info */}
          <div className="mt-12 pt-8 border-t border-brand-500">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-brand-100">
              <div className="flex items-center gap-2">
                <span className="text-2xl">✓</span>
                <span>Cadastro gratuito</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">✓</span>
                <span>Sem taxa mensal</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">✓</span>
                <span>Cancelamento a qualquer momento</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  )
}

export default CTASection
