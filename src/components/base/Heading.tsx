import { ReactNode } from 'react'
import { cn } from '../../lib/utils'

export interface HeadingProps {
  children: ReactNode
  level?: 1 | 2 | 3 | 4 | 5 | 6
  className?: string
  align?: 'left' | 'center' | 'right'
}

const Heading = ({ children, level = 2, className, align = 'left' }: HeadingProps) => {
  const alignments = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  }

  const baseStyles = 'font-bold text-gray-900'

  const sizes = {
    1: 'text-4xl md:text-5xl lg:text-6xl',
    2: 'text-3xl md:text-4xl lg:text-5xl',
    3: 'text-2xl md:text-3xl lg:text-4xl',
    4: 'text-xl md:text-2xl lg:text-3xl',
    5: 'text-lg md:text-xl lg:text-2xl',
    6: 'text-base md:text-lg lg:text-xl',
  }

  const Tag = `h${level}` as keyof JSX.IntrinsicElements

  return (
    <Tag className={cn(baseStyles, sizes[level], alignments[align], className)}>
      {children}
    </Tag>
  )
}

export default Heading
