import styled from "styled-components";

interface IconContainerInterface {
  color: string
}

export const IconContainer = styled.div<IconContainerInterface>`
  display: flex;
  align-items: center;
  color: ${({color = 'yellow', theme}) => theme.colors[color].main};
  width: fit-content;
  height: fit-content;
`
