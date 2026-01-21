import { MapPin, Mail, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react'

export interface FooterProps {
  onContactClick?: () => void
}

const Footer = ({ onContactClick }: FooterProps) => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: '#' },
    { name: 'Instagram', icon: Instagram, href: '#' },
    { name: 'LinkedIn', icon: Linkedin, href: '#' },
    { name: 'Twitter', icon: Twitter, href: '#' },
  ]

  const quickLinks = [
    { name: 'Funcionalidades', href: '#features' },
    { name: 'Como Funciona', href: '#how-it-works' },
    { name: 'Benefícios', href: '#benefits' },
    { name: 'Contato', href: '#contact' },
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Venture</h3>
            <p className="text-gray-400 leading-relaxed">
              Conectando responsáveis, escolas e motoristas para um transporte escolar mais seguro e eficiente.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-brand-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="flex-shrink-0 mt-1 text-brand-400" size={20} />
                <span>São Paulo, SP - Brasil</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Mail className="flex-shrink-0 text-brand-400" size={20} />
                <button
                  onClick={onContactClick}
                  className="hover:text-brand-400 transition-colors text-left"
                >
                  Fale Conosco
                </button>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Siga-nos</h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="p-3 bg-gray-800 rounded-lg hover:bg-brand-600 transition-colors group"
                  aria-label={social.name}
                >
                  <social.icon
                    className="text-gray-400 group-hover:text-white transition-colors"
                    size={20}
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} Venture. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
