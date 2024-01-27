import React, { forwardRef, ButtonHTMLAttributes } from 'react'

import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { twMerge } from 'tailwind-merge'

// import styles from './button.module.scss'

const buttonVariants = cva('p-8', {
  variants: {
    theme: {
      primary: 'bg-red-200',
    },
    // size: {
    //   small: styles.smallSize,
    //   default: styles.defaultSize,
    //   large: styles.largeSize,
    // },
  },
  defaultVariants: {
    theme: 'primary',
    // size: 'default',
  },
})

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, theme, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={twMerge(buttonVariants({ theme, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)

export { Button, buttonVariants }
