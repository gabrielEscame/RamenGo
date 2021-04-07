import React from 'react'
import { CardContainer } from './style'
import Icon from '../../foundation/Icon'

interface CardInterface {
  isSelected: boolean
}

const Card: React.FC<CardInterface> = ({ isSelected = false }) => {
  return(
    <CardContainer isSelected={isSelected}>
        <Icon iconId="salt" height={104} width={104}/>
    </CardContainer>
  )
}

export default Card
