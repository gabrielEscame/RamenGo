import styled from 'styled-components'

interface InputContainerInterface {
  errorMessage?: string
}

export const InputContainer = styled.input<InputContainerInterface>`
  width: 100%;
  max-width: 352px;
  height: 40px;
  border: 2px solid;
  border-color: ${({ theme, errorMessage }) =>
    errorMessage ? theme.colors.red.main : theme.colors.tana.main};
  border-radius: 10px;
  padding: 8px 14px;
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.black.main};
  background-color: transparent;
  transition: all ease 0.3s;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.blue.main};
  }
`

export const LabelContainer = styled.label`

`
