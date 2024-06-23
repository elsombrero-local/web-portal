import clsx from "clsx"
import { CardProps, variants } from "./Card.property"

export const Card = ({shadow, radius, className, ...props}: CardProps) => {
  return (
    <div 
      className={clsx(
        variants.shadow[shadow || 'md'],
        variants.radius[radius || 'md'],
        'p-8 shadow-slate-900',
        className,
      )}
      {...props}
    />
  )
}