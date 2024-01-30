import React, { ChangeEvent, InputHTMLAttributes, ReactNode } from 'react'

import { twMerge } from 'tailwind-merge'

import './styles.scss'

export interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  disabled?: boolean
  className?: string
  label?: ReactNode
  errorMessage?: string
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
}

const Checkbox = ({
  id,
  name,
  checked,
  disabled,
  label,
  defaultChecked,
  errorMessage,
  className,
  onChange,
  ...props
}: CheckboxProps) => {
  return (
    <div className={twMerge('checkbox', className)}>
      <input
        id={id}
        type="checkbox"
        name={name}
        defaultChecked={defaultChecked}
        checked={checked}
        disabled={disabled}
        onChange={onChange}
        {...props}
      />
      <div>
        <label htmlFor={id}>{label}</label>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </div>
    </div>
  )
}
export { Checkbox }
