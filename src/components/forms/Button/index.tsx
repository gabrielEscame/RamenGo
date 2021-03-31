import React from 'react'
import { ButtonContainer } from './style'
import { BodyTwo, BodyOne } from '../../foundation/Typography'

interface ButtonInterface {
  label: string
  color?: 'vanilla' | 'blue'
  backgroundColor?: 'blue' | 'red' | 'yellow'
  textTransform?: string
  icon?: 'right-arrow' | 'close'
  weight?: number
  letterSpacing?: number
  buttonSize?: 'small' | 'large'
  isDisabled?: boolean
}

const buttonTypographyMapper = {
  small: BodyTwo,
  large: BodyOne,
}

const Button: React.FC<ButtonInterface> = ({
  label,
  color = 'vanilla',
  backgroundColor = 'blue',
  textTransform = 'uppercase',
  weight = 800,
  letterSpacing = 1.78,
  icon = 'right-arrow',
  buttonSize = 'small',
  isDisabled,
}) => {
  const ButtonTypography = buttonTypographyMapper[buttonSize]
  return (
    <ButtonContainer
      color={isDisabled ? 'vanilla': color}
      backgroundColor={isDisabled ? 'gray' : backgroundColor}
      buttonSize={buttonSize}
    >
      <ButtonTypography
        color="vanilla"
        weight={weight}
        letterSpacing={letterSpacing}
        textTransform={textTransform}
      >
        {label}
      </ButtonTypography>
      <img src={`/icons/${icon}.svg`} alt={icon} />
    </ButtonContainer>
  )
}

export default Button
