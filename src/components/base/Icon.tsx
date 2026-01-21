import { LucideIcon } from 'lucide-react'
import { cn } from '../../lib/utils'

export interface IconProps {
  icon: LucideIcon
  className?: string
  size?: number
}

const Icon = ({ icon: IconComponent, className, size = 24 }: IconProps) => {
  return (
    <IconComponent
      className={cn('flex-shrink-0', className)}
      size={size}
    />
  )
}

export default Icon
