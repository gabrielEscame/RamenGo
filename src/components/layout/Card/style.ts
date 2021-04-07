import styled from 'styled-components'

interface CardContainerInterface {
  isSelected: boolean
}

export const CardContainer = styled.div<CardContainerInterface>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 316px;
  width: 320px;
  border-radius: 11px;
  background-color: ${({ isSelected, theme }) =>
    isSelected ? theme.colors.blue.main : theme.colors.vanilla.main};
  box-shadow: ${({ isSelected }) =>
    !isSelected && '0px 4px 12px rgba(224, 219, 191, 0.6)'};
`
