import { forwardRef, ButtonHTMLAttributes } from 'react'

import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { twMerge } from 'tailwind-merge'

import styles from './button.module.scss'

const buttonVariants = cva(styles.btn, {
  variants: {
    themes: {
      default: styles.default,
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
    themes: 'default',
    size: 'default',
  },
})

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, themes, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={twMerge(buttonVariants({ themes, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)

export { Button, buttonVariants }
