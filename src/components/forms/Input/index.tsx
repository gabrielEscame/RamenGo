import React from 'react'
import { InputContainer } from './style'
import { Label } from '../../foundation/Typography'

interface InputInterface {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  label: string
  errorMessage?: string
}

const Input: React.FC<InputInterface> = ({ onChange, label, errorMessage }) => {
  return (
    <>
      <Label>{label}</Label>
      <InputContainer onChange={onChange} errorMessage={errorMessage} />
    </>
  )
}

export default Input
