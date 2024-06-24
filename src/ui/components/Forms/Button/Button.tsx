import clsx from "clsx"
import { ButtonProps, variants } from "./Button.property"

export const Button = ({ size, radius, theme, variant, className, ...props}: ButtonProps) => {
  return (<button
    className={clsx(
      variants.size[size || 'md'],
      variants.radius[radius || 'md'],
      variants.variants[variant || 'default'].theme[theme || 'primary'],
      'transition-all duration-200 disabled:opacity-45',
      className
    )}
    {...props}
  />)
}