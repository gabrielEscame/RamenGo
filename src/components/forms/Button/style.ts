import styled from 'styled-components'
import theme from '../../../styles/theme'
import { IconContainer } from '../../foundation/Icon/style'

interface ButtonInterface {
  backgroundColor: string
  buttonSize: string
  iconPosition: 'right' | 'left'
  buttonStyle: 'normal' | 'text'
}

const buttonSizeMapper = {
  small: {
    padding: '10px 16px',
    minWidth: '130px',
    height: '40px',
    borderRadius: '20px'
  },
  large: {
    padding: '19px 24px',
    minWidth: '197px',
    height: '60px',
    borderRadius: '30px'
  }
}

const iconPositionMapper = {
  right: 'row',
  left: 'row-reverse'
}

export const ButtonContainer = styled.button<ButtonInterface>`
  display: flex;
  flex-direction: ${({ iconPosition }) => iconPositionMapper[iconPosition]};
  justify-content: space-between;
  align-items: center;
  border: none;
  background-color: ${({ theme, backgroundColor, buttonStyle }) =>
    buttonStyle === 'normal'
      ? theme.colors[backgroundColor].main
      : 'transparent'};
  border-radius: ${({ buttonSize }) =>
    buttonSizeMapper[buttonSize].borderRadius};
  height: ${({ buttonSize }) => buttonSizeMapper[buttonSize].height};
  min-width: ${({ buttonSize, buttonStyle }) =>
    buttonStyle === 'normal' ? buttonSizeMapper[buttonSize].minWidth : '70px'};
  padding: ${({ buttonSize, buttonStyle }) =>
    buttonStyle === 'normal' ? buttonSizeMapper[buttonSize].padding : '0'};
  :hover {
    box-shadow: 0 2px 8px 0
      ${({ theme, backgroundColor }) =>
        `${theme.colors[backgroundColor].main}66`};
  }
  :focus {
    background-color: ${({ theme, backgroundColor }) =>
      theme.colors[backgroundColor].dark};
    outline: 0;
  }

  ${IconContainer} {
    transform: ${({ iconPosition }) =>
      iconPosition === 'left' ? 'rotateZ(180deg)' : 'none'};
  }
`
