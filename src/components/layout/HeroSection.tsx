import { motion } from 'framer-motion'
import Button from '../base/Button'
import Heading from '../base/Heading'

const HeroSection = () => {
  return (
    <section className="relative bg-white overflow-hidden">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl pt-8 pb-16 md:pt-10 md:pb-20 lg:pt-12 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            {/* Launch Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-brand-50 border-2 border-brand-200 text-brand-700 px-5 py-2.5 rounded-full font-semibold text-base mb-6 shadow-sm"
            >
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-600"></span>
              </span>
              Lançamento: Janeiro 2027
            </motion.div>

            <Heading level={1} align="left" className="mb-6 text-balance">
              Transporte Escolar
              <span className="text-brand-600 block">Simples e Seguro</span>
            </Heading>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed text-balance">
              Conectamos responsáveis, escolas e motoristas em um único aplicativo.
              Simplifique o trajeto diário dos seus filhos com segurança e transparência.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" variant="outline">
              Saiba Mais
            </Button>
            </div>
          </motion.div>

          {/* Right Content - Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative bg-gradient-to-br from-brand-50 to-brand-100 rounded-3xl p-8 md:p-12">
              {/* Decorative Elements */}
              <div className="absolute top-4 right-4 w-20 h-20 bg-brand-200 rounded-full opacity-50 blur-xl" />
              <div className="absolute bottom-8 left-8 w-32 h-32 bg-brand-300 rounded-full opacity-30 blur-xl" />

              {/* Mock App Interface */}
              <div className="relative bg-white rounded-2xl shadow-xl p-6 space-y-4">
                <div className="flex items-center gap-3 pb-4 border-b border-gray-100">
                  <div className="w-10 h-10 bg-brand-100 rounded-full flex items-center justify-center">
                    <span className="text-brand-600 font-bold">V</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Viagem em andamento</p>
                    <p className="text-sm text-gray-500">Escola Modelo</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-green-600">✓</span>
                    </div>
                    <p className="text-sm text-gray-700">Maria (aluna) embarcou</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-brand-100 rounded-full flex items-center justify-center">
                      <span className="text-brand-600">🚐</span>
                    </div>
                    <p className="text-sm text-gray-700">Motorista João</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                      <span className="text-orange-600">⏱</span>
                    </div>
                    <p className="text-sm text-gray-700">Chegada em 12 min</p>
                  </div>
                </div>
                <div className="pt-4 border-t border-gray-100">
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-brand-600 rounded-full w-3/4" />
                  </div>
                  <p className="text-xs text-gray-500 mt-2">75% do percurso concluído</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
