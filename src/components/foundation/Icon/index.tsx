import React from 'react'
import { IconContainer } from './style'
import IconMapper from '../../../assets/icons'

interface IconInterface {
  iconId: string
  color?: string
}

const Icon: React.FC<IconInterface> = ({ iconId, color }) => {
  const IconComponent = IconMapper[iconId]
  return (
    <IconContainer color={color}>
      <IconComponent />
    </IconContainer>
  )
}

export default Icon
