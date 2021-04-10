import React from 'react'
import { InputContainer, ErrorMessageContainer } from './style'
import { Label, ErrorMessage } from '../../foundation/Typography'
import Icon from '../../foundation/Icon'

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
      <ErrorMessageContainer>
        <Icon iconId="error" height={16} width={16} />
        <ErrorMessage>{errorMessage}</ErrorMessage>
      </ErrorMessageContainer>
    </>
  )
}

export default Input
