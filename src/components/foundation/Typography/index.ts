import styled from 'styled-components'

interface TypographyInterface {
  color?: string
  weight?: number
  lineHeight?: number
  letterSpacing?: number
  textTransform?: string
  textDecoration?: string
}

interface LabelTwoInterface extends TypographyInterface {
  done?: Boolean
}

export const HeadlineOne = styled.h1<TypographyInterface>`
  color: ${({ theme, color }) =>
    color ? theme.colors[color].main : theme.colors.black.main};
  font-size: 160px;
  font-weight: ${({ weight = 900 }) => weight};
  letter-spacing: ${({ letterSpacing = 0 }) => `${letterSpacing}px`};
  line-height: ${({ lineHeight = '100px' }) => `${lineHeight}px`};
  text-transform: ${({ textTransform }) => textTransform};
  text-decoration: ${({ textDecoration = '' }) => textDecoration};
`

export const HeadlineTwo = styled.h2<TypographyInterface>`
  color: ${({ theme, color }) =>
    color ? theme.colors[color].main : theme.colors.black.main};
  font-size: 32px;
  font-weight: ${({ weight = 900 }) => weight};
  letter-spacing: ${({ letterSpacing = 0 }) => `${letterSpacing}px`};
  line-height: ${({ lineHeight = '40px' }) => `${lineHeight}px`};
  text-transform: ${({ textTransform }) => textTransform};
  text-decoration: ${({ textDecoration = '' }) => textDecoration};
`

export const HeadlineThree = styled.h3<TypographyInterface>`
  color: ${({ theme, color }) =>
    color ? theme.colors[color].main : theme.colors.black.main};
  font-size: 20px;
  font-weight: ${({ weight = 900 }) => weight};
  letter-spacing: ${({ letterSpacing = 0 }) => `${letterSpacing}px`};
  line-height: ${({ lineHeight = '28px' }) => `${lineHeight}px`};
  text-transform: ${({ textTransform }) => textTransform};
  text-decoration: ${({ textDecoration = '' }) => textDecoration};
`
export const BodyOne = styled.p<TypographyInterface>`
  color: ${({ theme, color }) =>
    color ? theme.colors[color].main : theme.colors.black.main};
  font-size: 16px;
  font-weight: ${({ weight = 500 }) => weight};
  letter-spacing: ${({ letterSpacing = 0 }) => `${letterSpacing}px`};
  line-height: ${({ lineHeight = '24px' }) => `${lineHeight}px`};
  text-transform: ${({ textTransform }) => textTransform};
  text-decoration: ${({ textDecoration = '' }) => textDecoration};
`

export const BodyTwo = styled(BodyOne)`
  font-size: 14px;
  line-height: ${({ lineHeight = '16px' }) => `${lineHeight}px`};
`

export const LabelOne = styled(BodyOne)`
  font-weight: 800;
  margin-bottom: 8px;
`

export const LabelTwo = styled(LabelOne)<LabelTwoInterface>`
  font-size: 12px;
  color: ${({ done, theme }) =>
    done ? theme.colors.yellow.main : theme.colors.vanilla.dark};
`

export const ErrorMessage = styled(BodyTwo)`
  color: ${({ theme }) => theme.colors.red.main};
  line-height: 24px;
  letter-spacing: 0px;
  text-align: left;
`
