import styled from 'styled-components'
import theme from '../../../styles/theme'

interface ButtonInterface {
  backgroundColor: string
  buttonSize: string
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

export const ButtonContainer = styled.button<ButtonInterface>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: none;
  background-color: ${({ theme, backgroundColor }) =>
    theme.colors[backgroundColor].main};
  border-radius: ${({ buttonSize }) =>
    buttonSizeMapper[buttonSize].borderRadius};
  height: ${({ buttonSize }) => buttonSizeMapper[buttonSize].height};
  min-width: ${({ buttonSize }) => buttonSizeMapper[buttonSize].minWidth};
  padding: ${({ buttonSize }) => buttonSizeMapper[buttonSize].padding};
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
`
