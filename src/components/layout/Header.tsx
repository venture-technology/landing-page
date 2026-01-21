import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import logo from '../../assets/venture-logo.png'

export interface NavigationProps {
  className?: string
  onContactClick?: () => void
}

const Navigation = ({ className, onContactClick }: NavigationProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: 'Funcionalidades', href: '#features' },
    { name: 'Como Funciona', href: '#how-it-works' },
    { name: 'Benefícios', href: '#benefits' },
  ]

  return (
    <nav className={className}>
      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-8">
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="text-gray-700 hover:text-brand-600 transition-colors font-medium"
          >
            {item.name}
          </a>
        ))}
      </div>

      {/* Mobile Navigation Toggle */}
      <button
        className="md:hidden p-2 text-gray-700 hover:text-brand-600 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Abrir menu"
        aria-expanded={isOpen}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-lg py-4 px-6 flex flex-col gap-4">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-gray-700 hover:text-brand-600 transition-colors font-medium py-2"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </a>
          ))}
          <button
            onClick={() => {
              onContactClick?.()
              setIsOpen(false)
            }}
            className="text-brand-600 hover:text-brand-700 transition-colors font-semibold py-2 text-left"
          >
            Fale Conosco
          </button>
        </div>
      )}
    </nav>
  )
}

export interface HeaderProps {
  className?: string
  onContactClick?: () => void
}

const Header = ({ className, onContactClick }: HeaderProps) => {
  return (
    <header className={className}>
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex items-center justify-between py-6">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3 group" aria-label="Venture - Início">
            <img
              src={logo}
              alt="Venture Logo"
              className="h-10 w-10 object-contain transition-transform group-hover:scale-105"
            />
            <span className="text-2xl font-bold text-gray-900">Venture</span>
          </a>

          {/* Navigation */}
          <Navigation onContactClick={onContactClick} />

          {/* Contact Link (Desktop) */}
          <div className="hidden md:block">
            <button
              onClick={onContactClick}
              className="text-brand-600 hover:text-brand-700 transition-colors font-semibold"
            >
              Fale Conosco
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
