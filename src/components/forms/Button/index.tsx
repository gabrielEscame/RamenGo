import React from 'react'
import { ButtonContainer } from './style'
import { BodyTwo, BodyOne } from '../../foundation/Typography'
import Icon from '../../foundation/Icon'

interface ButtonInterface {
  label: string
  backgroundColor?: 'blue' | 'red' | 'yellow'
  iconId?: 'rightArrow' | 'close'
  iconColor?: 'yellow' | 'red' | 'blue'
  iconPosition?: 'right' | 'left'
  buttonSize?: 'small' | 'large'
  isDisabled?: boolean
  labelColor?: 'blue' | 'vanilla'
  buttonStyle?: 'normal' | 'text'
}

const buttonTypographySizeMapper = {
  small: BodyTwo,
  large: BodyOne
}

const Button: React.FC<ButtonInterface> = ({
  label,
  labelColor = 'vanilla',
  backgroundColor = 'blue',
  iconId = 'rightArrow',
  iconColor = 'yellow',
  buttonSize = 'small',
  isDisabled = false,
  iconPosition = 'right',
  buttonStyle = 'normal'
}) => {
  const ButtonTypography = buttonTypographySizeMapper[buttonSize]

  return (
    <ButtonContainer
      backgroundColor={isDisabled ? 'gray' : backgroundColor}
      buttonSize={buttonSize}
      iconPosition={iconPosition}
      buttonStyle={buttonStyle}
    >
      <ButtonTypography
        color={isDisabled ? 'white' : labelColor}
        weight={800}
        letterSpacing={1.78}
        textTransform={buttonStyle === 'normal' ? 'uppercase' : 'capitalize'}
        textDecoration={buttonStyle === 'normal' ? 'none' : 'underline'}
      >
        {label}
      </ButtonTypography>
      <Icon iconId={iconId} color={isDisabled ? 'white' : iconColor} height={16} width={20}/>
    </ButtonContainer>
  )
}

export default Button
