import styled from 'styled-components'

interface IconContainerInterface {
  color: string
  height?: number
  width?: number
}

export const IconContainer = styled.div<IconContainerInterface>`
  display: flex;
  align-items: center;
  color: ${({ color = 'yellow', theme }) => theme.colors[color].main};
  width: fit-content;
  height: fit-content;

  svg {
    height: ${({ height = 48 }) => `${height}px`};
    width: ${({ width = 48 }) => `${width}px`};
  }
`
