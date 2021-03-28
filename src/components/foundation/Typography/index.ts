import styled from 'styled-components'

interface TypographyInterface {
  color?: string
  weight?: string
  lineHeight?: number
  letterSpacing?: number
}

export const HeadlineOne = styled.h1<TypographyInterface>`
  color: ${({ theme, color }) =>
    color ? theme.colors[color].main : theme.colors.black.main};
  font-size: 160px;
  font-weight: ${({ weight }) => (weight ? weight : 900)};
  letter-spacing: ${({ letterSpacing }) => (letterSpacing ? letterSpacing : 0)};
  line-height: ${({ lineHeight }) =>
    lineHeight ? `${lineHeight}px` : '100px'};
`

export const HeadlineTwo = styled.h1<TypographyInterface>`
  color: ${({ theme, color }) =>
    color ? theme.colors[color].main : theme.colors.black.main};
  font-size: 32px;
  font-weight: ${({ weight }) => (weight ? weight : 900)};
  letter-spacing: ${({ letterSpacing }) => (letterSpacing ? letterSpacing : 0)};
  line-height: ${({ lineHeight }) => (lineHeight ? `${lineHeight}px` : '40px')};
`

export const HeadlineThree = styled.h1<TypographyInterface>`
  color: ${({ theme, color }) =>
    color ? theme.colors[color].main : theme.colors.black.main};
  font-size: 20px;
  font-weight: ${({ weight }) => (weight ? weight : 900)};
  letter-spacing: ${({ letterSpacing }) => (letterSpacing ? letterSpacing : 0)};
  line-height: ${({ lineHeight }) => (lineHeight ? `${lineHeight}px` : '28px')};
`
export const BodyOne = styled.p<TypographyInterface>`
  color: ${({ theme, color }) =>
    color ? theme.colors[color].main : theme.colors.black.main};
  font-size: 16px;
  font-weight: ${({ weight }) => (weight ? weight : 500)};
  letter-spacing: ${({ letterSpacing }) => (letterSpacing ? letterSpacing : 0)};
  line-height: ${({ lineHeight }) => (lineHeight ? `${lineHeight}px` : '24px')};
`

export const BodyTwo = styled.p<TypographyInterface>`
  color: ${({ theme, color }) =>
    color ? theme.colors[color].main : theme.colors.black.main};
  font-size: 14px;
  font-weight: ${({ weight }) => (weight ? weight : 500)};
  letter-spacing: ${({ letterSpacing }) => (letterSpacing ? letterSpacing : 0)};
  line-height: ${({ lineHeight }) => (lineHeight ? `${lineHeight}px` : '16px')};
`
