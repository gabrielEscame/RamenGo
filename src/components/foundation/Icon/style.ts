import styled from 'styled-components'

interface IconContainerInterface {
  color: string
  colorVariation: 'main' | 'dark' | 'light'
  height?: number
  width?: number
}

export const IconContainer = styled.div<IconContainerInterface>`
  display: flex;
  align-items: center;
  color: ${({ color = 'yellow', theme, colorVariation }) => theme.colors[color][colorVariation]};
  width: fit-content;
  height: fit-content;

  svg {
    height: ${({ height = 48 }) => `${height}px`};
    width: ${({ width = 48 }) => `${width}px`};
  }
`
