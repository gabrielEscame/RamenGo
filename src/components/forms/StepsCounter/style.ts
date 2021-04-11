import styled from 'styled-components'
import { IconContainer } from '../../foundation/Icon/style'
import { LabelTwo } from '../../foundation/Typography'

interface StepsCounterContainerInterface {
  done?: Boolean
}

export const StepsCounterContainer = styled.div<StepsCounterContainerInterface>`
  display: flex;
  flex-direction: column;
  margin-bottom: 32px;
`

export const StepsCounterText = styled.div<StepsCounterContainerInterface>`
  display: flex;

  > ${LabelTwo} {
    margin-right: 60px;
    min-width: 53px;
    text-align: center;

    &:last-child {
      margin-right: 0px;
    }
  }
`
export const StepsCounterProgress = styled.div<StepsCounterContainerInterface>`
  display: flex;
  justify-content: center;
  align-items: center;

  > ${IconContainer} {
    &:nth-child(even) {
      margin: 0 8px;
    }
  }
`
