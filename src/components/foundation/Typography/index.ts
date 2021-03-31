import styled from 'styled-components'

interface TypographyInterface {
  color?: string
  weight?: number
  lineHeight?: number
  letterSpacing?: number
  textTransform?: string
}

export const HeadlineOne = styled.h1<TypographyInterface>`
  color: ${({ theme, color }) =>
    color ? theme.colors[color].main : theme.colors.black.main};
  font-size: 160px;
  font-weight: ${({ weight }) => (weight ? weight : 900)};
  letter-spacing: ${({ letterSpacing }) =>
    letterSpacing ? `${letterSpacing}px` : 0};
  line-height: ${({ lineHeight }) =>
    lineHeight ? `${lineHeight}px` : '100px'};
  text-transform: ${({ textTransform }) => textTransform};
`

export const HeadlineTwo = styled.h1<TypographyInterface>`
  color: ${({ theme, color }) =>
    color ? theme.colors[color].main : theme.colors.black.main};
  font-size: 32px;
  font-weight: ${({ weight }) => (weight ? weight : 900)};
  letter-spacing: ${({ letterSpacing }) =>
    letterSpacing ? `${letterSpacing}px` : 0};
  line-height: ${({ lineHeight }) => (lineHeight ? `${lineHeight}px` : '40px')};
  text-transform: ${({ textTransform }) => textTransform};
`

export const HeadlineThree = styled.h1<TypographyInterface>`
  color: ${({ theme, color }) =>
    color ? theme.colors[color].main : theme.colors.black.main};
  font-size: 20px;
  font-weight: ${({ weight }) => (weight ? weight : 900)};
  letter-spacing: ${({ letterSpacing }) =>
    letterSpacing ? `${letterSpacing}px` : 0};
  line-height: ${({ lineHeight }) => (lineHeight ? `${lineHeight}px` : '28px')};
  text-transform: ${({ textTransform }) => textTransform};
`
export const BodyOne = styled.p<TypographyInterface>`
  color: ${({ theme, color }) =>
    color ? theme.colors[color].main : theme.colors.black.main};
  font-size: 16px;
  font-weight: ${({ weight }) => (weight ? weight : 500)};
  letter-spacing: ${({ letterSpacing }) =>
    letterSpacing ? `${letterSpacing}px` : 0};
  line-height: ${({ lineHeight }) => (lineHeight ? `${lineHeight}px` : '24px')};
  text-transform: ${({ textTransform }) => textTransform};
`

export const BodyTwo = styled.p<TypographyInterface>`
  color: ${({ theme, color }) =>
    color ? theme.colors[color].main : theme.colors.black.main};
  font-size: 14px;
  font-weight: ${({ weight }) => (weight ? weight : 500)};
  letter-spacing: ${({ letterSpacing }) =>
    letterSpacing ? `${letterSpacing}px` : 0};
  line-height: ${({ lineHeight }) => (lineHeight ? `${lineHeight}px` : '16px')};
  text-transform: ${({ textTransform }) => textTransform};
`
