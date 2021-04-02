import React from 'react'
import { IconContainer } from './style'
import RightArrow from '../../../assets/icons/right-arrow.svg'
import Close from '../../../assets/icons/close.svg'

interface IconInterface {
  iconId: string
  color?: string
}

const iconMapper = {
  rightArrow: RightArrow,
  close: Close
}

const Icon: React.FC<IconInterface> = ({ iconId, color }) => {
  const IconComponent = iconMapper[iconId]
  return (
    <IconContainer color={color}>
      <IconComponent />
    </IconContainer>
  )
}

export default Icon
