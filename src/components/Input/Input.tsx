import type { InputHTMLAttributes, TextareaHTMLAttributes } from 'react'
import { input, inputWrapper, label, textarea } from './Input.css'

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  labelText?: string
}

export function Input({ labelText, id, ...props }: InputFieldProps) {
  const inputId = id ?? labelText
  return (
    <div className={inputWrapper}>
      {labelText && (
        <label htmlFor={inputId} className={label}>
          {labelText}
        </label>
      )}
      <input id={inputId} className={input} {...props} />
    </div>
  )
}

interface TextareaFieldProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  labelText?: string
}

export function Textarea({ labelText, id, ...props }: TextareaFieldProps) {
  const inputId = id ?? labelText
  return (
    <div className={inputWrapper}>
      {labelText && (
        <label htmlFor={inputId} className={label}>
          {labelText}
        </label>
      )}
      <textarea id={inputId} className={textarea} {...props} />
    </div>
  )
}
