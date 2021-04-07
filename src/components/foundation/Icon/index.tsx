import React from 'react'
import { IconContainer } from './style'
import IconMapper from '../../../assets/icons'

interface IconInterface {
  iconId: string
  color?: string
  height?: number
  width?: number
}

const Icon: React.FC<IconInterface> = ({ iconId, color, height, width }) => {
  const IconComponent = IconMapper[iconId]
  return (
    <IconContainer color={color} height={height} width={width}>
      <IconComponent />
    </IconContainer>
  )
}

export default Icon
