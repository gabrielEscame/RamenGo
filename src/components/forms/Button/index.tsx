import React from 'react'
import { ButtonContainer } from './style'
import { BodyTwo, BodyOne } from '../../foundation/Typography'
import Icon from '../../foundation/Icon'

interface ButtonInterface {
  label: string
  color?: 'vanilla' | 'blue'
  backgroundColor?: 'blue' | 'red' | 'yellow'
  textTransform?: string
  iconId?: 'rightArrow' | 'close'
  iconColor?: string
  weight?: number
  letterSpacing?: number
  buttonSize?: 'small' | 'large'
  isDisabled?: boolean
}

const buttonTypographyMapper = {
  small: BodyTwo,
  large: BodyOne
}

const Button: React.FC<ButtonInterface> = ({
  label,
  color = 'vanilla',
  backgroundColor = 'blue',
  textTransform = 'uppercase',
  weight = 800,
  letterSpacing = 1.78,
  iconId = 'rightArrow',
  iconColor,
  buttonSize = 'small',
  isDisabled = false
}) => {
  const ButtonTypography = buttonTypographyMapper[buttonSize]
  return (
    <ButtonContainer
      backgroundColor={isDisabled ? 'gray' : backgroundColor}
      buttonSize={buttonSize}
    >
      <ButtonTypography
        color={isDisabled ? 'white' : color}
        weight={weight}
        letterSpacing={letterSpacing}
        textTransform={textTransform}
      >
        {label}
      </ButtonTypography>
      <Icon iconId={iconId} color={isDisabled ? 'white' : iconColor} />
    </ButtonContainer>
  )
}

export default Button
