import styled from 'styled-components'
import { IconContainer } from '../../foundation/Icon/style'
import { BodyTwo, HeadlineThree } from '../../foundation/Typography'

interface CardContainerInterface {
  isSelected: boolean
}

export const CardContainer = styled.div<CardContainerInterface>`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 43px 30px 32px;
  height: 316px;
  width: 320px;
  border-radius: 11px;
  background-color: ${({ isSelected, theme }) =>
    isSelected ? theme.colors.blue.main : theme.colors.vanilla.main};
  transition: all ease 0.3s;
  box-shadow: ${({ isSelected }) =>
    !isSelected && '0px 4px 12px rgba(224, 219, 191, 0.6)'};

  > ${IconContainer} {
    margin-bottom: 16px;
  }
`
export const CardTextContainer = styled.div<CardContainerInterface>`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 30px;

  ${HeadlineThree} {
    margin-bottom: 2px;
    color: ${({ isSelected, theme }) =>
      isSelected ? theme.colors.vanilla.main : theme.colors.blue.main};
  }

  ${BodyTwo} {
    color: ${({ isSelected, theme }) =>
      isSelected ? theme.colors.vanilla.main : theme.colors.black.main};
  }
`

export const CardActionContainer = styled.div<CardContainerInterface>`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${HeadlineThree} {
    color: ${({ isSelected, theme }) =>
      isSelected ? theme.colors.vanilla.main : theme.colors.red.main};
  }
`
