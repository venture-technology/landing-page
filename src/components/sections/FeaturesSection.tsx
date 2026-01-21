import { motion } from 'framer-motion'
import { Users, GraduationCap, Car, Shield, Clock, CreditCard, MapPin, Smartphone } from 'lucide-react'
import Card from '../base/Card'
import Heading from '../base/Heading'
import Icon from '../base/Icon'
import Section from '../base/Section'

const features = {
  parents: [
    { icon: Smartphone, title: 'App Intuitivo', description: 'Interface simples e fácil de usar para acompanhar tudo em tempo real.' },
    { icon: Shield, title: 'Segurança Total', description: 'Monitore a localização dos seus filhos durante todo o trajeto.' },
    { icon: MapPin, title: 'Localização em Tempo Real', description: 'Acompanhe a viagem minuto a minuto no mapa.' },
    { icon: CreditCard, title: 'Pagamento Fácil', description: 'Pague via boleto ou cartão de crédito de forma segura.' },
  ],
  schools: [
    { icon: Users, title: 'Gestão de Alunos', description: 'Controle completo da entrada e saída de todos os alunos.' },
    { icon: GraduationCap, title: 'Cadastro de Tios', description: 'Organize os tios escolares e gerencie permissões.' },
    { icon: Car, title: 'Controle da Frota', description: 'Visualize todos os motoristas ativos e suas rotas.' },
    { icon: Clock, title: 'Sistema de Convites', description: 'Convide motoristas e gerencie parcerias facilmente.' },
  ],
  drivers: [
    { icon: MapPin, title: 'Rotas Otimizadas', description: 'Geração automática de rotas baseadas nos endereços.' },
    { icon: Clock, title: 'Configuração Flexível', description: 'Defina distância máxima e valores por quilômetro.' },
    { icon: Users, title: 'Perfil Personalizado', description: 'Adicione fotos e descrição para conquistar mais clientes.' },
    { icon: Shield, title: 'Sem Contatos Diários', description: 'Não precisa confirmar com responsáveis todos os dias.' },
  ],
}

const FeaturesSection = () => {
  return (
    <Section id="features" background="gray" className="py-20 md:py-28">
      <div className="text-center mb-16">
        <Heading level={2} align="center" className="mb-4">
          Funcionalidades para
          <span className="text-brand-600 block">Todos os Usuários</span>
        </Heading>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          O Venture oferece recursos específicos para cada perfil, garantindo uma experiência personalizada e eficiente.
        </p>
      </div>

      {/* Tabs Content */}
      <div className="space-y-16">
        {/* Parents */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-brand-100 rounded-xl">
              <Users className="text-brand-600" size={32} />
            </div>
            <div>
              <Heading level={3} className="mb-1">Para Responsáveis</Heading>
              <p className="text-gray-600">Tudo para tranquilidade do seu dia a dia</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.parents.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Card hover className="h-56">
                  <div className="flex flex-col h-full">
                    <div className="p-3 bg-brand-50 rounded-lg w-fit mb-4">
                      <Icon icon={feature.icon} className="text-brand-600" size={28} />
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h4>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Schools */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-brand-100 rounded-xl">
              <GraduationCap className="text-brand-600" size={32} />
            </div>
            <div>
              <Heading level={3} className="mb-1">Para Escolas</Heading>
              <p className="text-gray-600">Organização e controle total</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.schools.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Card hover className="h-56">
                  <div className="flex flex-col h-full">
                    <div className="p-3 bg-brand-50 rounded-lg w-fit mb-4">
                      <Icon icon={feature.icon} className="text-brand-600" size={28} />
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h4>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Drivers */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-brand-100 rounded-xl">
              <Car className="text-brand-600" size={32} />
            </div>
            <div>
              <Heading level={3} className="mb-1">Para Motoristas</Heading>
              <p className="text-gray-600">Profissionalize seu transporte</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.drivers.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Card hover className="h-56">
                  <div className="flex flex-col h-full">
                    <div className="p-3 bg-brand-50 rounded-lg w-fit mb-4">
                      <Icon icon={feature.icon} className="text-brand-600" size={28} />
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h4>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  )
}

export default FeaturesSection
