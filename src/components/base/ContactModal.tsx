import { useState } from 'react'
import { X, Copy, Check } from 'lucide-react'
import Button from './Button'

export interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
}

const ContactModal = ({ isOpen, onClose }: ContactModalProps) => {
  const [copied, setCopied] = useState(false)
  const email = 'support@venturetechnology.xyz'

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy email:', err)
    }
  }

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title"
    >
      <div
        className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 transition-colors"
          aria-label="Fechar"
        >
          <X size={24} />
        </button>

        {/* Content */}
        <div className="text-center">
          <h2 id="contact-modal-title" className="text-2xl font-bold text-gray-900 mb-2">
            Fale Conosco
          </h2>
          <p className="text-gray-600 mb-6">
            Entre em contato conosco pelo email abaixo. Estamos aqui para ajudar!
          </p>

          {/* Email Display */}
          <div className="bg-brand-50 border-2 border-brand-200 rounded-xl p-6 mb-6">
            <p className="text-sm text-brand-600 font-semibold mb-2">Email de Suporte</p>
            <p className="text-xl font-bold text-gray-900 mb-4 break-all">{email}</p>

            {/* Copy Button */}
            <Button
              onClick={handleCopy}
              variant="primary"
              className="w-full flex items-center justify-center gap-2"
              aria-label="Copiar email"
            >
              {copied ? (
                <>
                  <Check size={20} />
                  Copiado!
                </>
              ) : (
                <>
                  <Copy size={20} />
                  Copiar Email
                </>
              )}
            </Button>
          </div>

          <p className="text-sm text-gray-500">
            Respondemos em até 24 horas úteis
          </p>
        </div>
      </div>
    </div>
  )
}

export default ContactModal
