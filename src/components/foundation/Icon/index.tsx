import React from 'react'
import { IconContainer } from './style'
import IconMapper from '../../../assets/icons'

interface IconInterface {
  iconId: string
  color?: string
  colorVariation?: 'main' | 'dark' | 'light'
  height?: number
  width?: number
}

const Icon: React.FC<IconInterface> = ({
  iconId,
  color,
  height,
  width,
  colorVariation = 'main'
}) => {
  const IconComponent = IconMapper[iconId]
  return (
    <IconContainer color={color} height={height} width={width} colorVariation={colorVariation}>
      <IconComponent />
    </IconContainer>
  )
}

export default Icon
