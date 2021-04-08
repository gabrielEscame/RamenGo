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
  font-weight: ${({ weight = 900 }) => weight};
  letter-spacing: ${({ letterSpacing = 0 }) => `${letterSpacing}px`};
  line-height: ${({ lineHeight = '100px' }) => `${lineHeight}px`};
  text-transform: ${({ textTransform }) => textTransform};
`

export const HeadlineTwo = styled.h1<TypographyInterface>`
  color: ${({ theme, color }) =>
    color ? theme.colors[color].main : theme.colors.black.main};
  font-size: 32px;
  font-weight: ${({ weight = 900 }) => weight};
  letter-spacing: ${({ letterSpacing = 0 }) => `${letterSpacing}px`};
  line-height: ${({ lineHeight = '40px' }) => `${lineHeight}px`};
  text-transform: ${({ textTransform }) => textTransform};
`

export const HeadlineThree = styled.h1<TypographyInterface>`
  color: ${({ theme, color }) =>
    color ? theme.colors[color].main : theme.colors.black.main};
  font-size: 20px;
  font-weight: ${({ weight = 900 }) => weight};
  letter-spacing: ${({ letterSpacing = 0 }) => `${letterSpacing}px`};
  line-height: ${({ lineHeight = '28px' }) => `${lineHeight}px`};
  text-transform: ${({ textTransform }) => textTransform};
`
export const BodyOne = styled.p<TypographyInterface>`
  color: ${({ theme, color }) =>
    color ? theme.colors[color].main : theme.colors.black.main};
  font-size: 16px;
  font-weight: ${({ weight = 500 }) => weight};
  letter-spacing: ${({ letterSpacing = 0 }) => `${letterSpacing}px`};
  line-height: ${({ lineHeight = '24px' }) => `${lineHeight}px`};
  text-transform: ${({ textTransform }) => textTransform};
`

export const BodyTwo = styled.p<TypographyInterface>`
  color: ${({ theme, color }) =>
    color ? theme.colors[color].main : theme.colors.black.main};
  font-size: 14px;
  font-weight: ${({ weight = 500 }) => weight};
  letter-spacing: ${({ letterSpacing = 0 }) => `${letterSpacing}px`};
  line-height: ${({ lineHeight = '16px' }) => `${lineHeight}px`};
  text-transform: ${({ textTransform }) => textTransform};
`

export const Label = styled(BodyOne)`
  font-weight: 800;
  margin-bottom: 8px;
`
