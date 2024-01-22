import { forwardRef, ButtonHTMLAttributes } from 'react'

import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { twMerge } from 'tailwind-merge'

import styles from './button.module.scss'

const buttonVariants = cva(styles.btn, {
  variants: {
    theme: {
      primary: styles.primary,
      secondary: styles.secondary,
      danger: styles.danger,
      success: styles.success,
      warning: styles.warning,
      info: styles.info,
    },
    size: {
      small: styles.smallSize,
      default: styles.defaultSize,
      large: styles.largeSize,
    },
  },
  defaultVariants: {
    theme: 'primary',
    size: 'default',
  },
})

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, theme, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={twMerge(buttonVariants({ theme, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)

export { Button, buttonVariants }
