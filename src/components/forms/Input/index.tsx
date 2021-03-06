import React from 'react'
import { InputContainer, InputField, ErrorMessageContainer } from './style'
import { LabelOne, ErrorMessage } from '../../foundation/Typography'
import Icon from '../../foundation/Icon'

interface InputInterface {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  label: string
  errorMessageType?: 'name' | 'zip' | 'address' | 'phone'
}

const errorMessageMapper = {
  name: 'Type a valid name. Don’t use numbers or symbols.',
  zip: 'Invalid ZIP Code. Try to write it whithout points.',
  address: 'This address doesn’t exist.',
  phone: 'Invalid phone number. Put the code of your city.'
}

const Input: React.FC<InputInterface> = ({
  onChange,
  label,
  errorMessageType
}) => {
  return (
    <InputContainer>
      <LabelOne>{label}</LabelOne>
      <InputField onChange={onChange} errorMessageType={errorMessageType} />
      {errorMessageType ? (
        <ErrorMessageContainer>
          <Icon iconId="error" height={16} width={16} />
          <ErrorMessage>{errorMessageMapper[errorMessageType]}</ErrorMessage>
        </ErrorMessageContainer>
      ) : null}
    </InputContainer>
  )
}

export default Input
