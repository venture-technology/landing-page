import { ReactNode } from 'react'
import { cn } from '../../lib/utils'

export interface SectionProps {
  children: ReactNode
  className?: string
  id?: string
  background?: 'white' | 'gray' | 'brand'
}

const Section = ({ children, className, id, background = 'white' }: SectionProps) => {
  const backgrounds = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    brand: 'bg-brand-600',
  }

  return (
    <section
      id={id}
      className={cn(
        'w-full',
        backgrounds[background],
        className
      )}
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {children}
      </div>
    </section>
  )
}

export default Section
