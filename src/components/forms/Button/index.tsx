import React from 'react'
import { ButtonContainer } from './style'
import { BodyTwo, BodyOne } from '../../foundation/Typography'
import Icon from '../../foundation/Icon'

interface ButtonInterface {
  label: string
  backgroundColor?: 'blue' | 'red' | 'yellow'
  iconId?: 'rightArrow' | 'close'
  buttonSize?: 'small' | 'large'
  isDisabled?: boolean
}

const buttonTypographyMapper = {
  small: BodyTwo,
  large: BodyOne
}

const Button: React.FC<ButtonInterface> = ({
  label,
  backgroundColor = 'blue',
  iconId = 'rightArrow',
  buttonSize = 'small',
  isDisabled = false
}) => {
  const ButtonTypography = buttonTypographyMapper[buttonSize]
  const ButtonTypographyColor = backgroundColor == 'yellow' ? 'blue' : 'vanilla'
  const ButtonIconColor = backgroundColor == 'yellow' ? 'red' : 'yellow'

  return (
    <ButtonContainer
      backgroundColor={isDisabled ? 'gray' : backgroundColor}
      buttonSize={buttonSize}
    >
      <ButtonTypography
        color={isDisabled ? 'white' : ButtonTypographyColor}
        weight={800}
        letterSpacing={1.78}
        textTransform='uppercase'
      >
        {label}
      </ButtonTypography>
      <Icon iconId={iconId} color={isDisabled ? 'white' : ButtonIconColor} />
    </ButtonContainer>
  )
}

export default Button
