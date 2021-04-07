import React from 'react'
import { CardContainer, CardTextContainer, CardActionContainer } from './style'
import { HeadlineThree, BodyTwo } from '../../foundation/Typography'
import Icon from '../../foundation/Icon'
import Button from '../../forms/Button'

interface CardInterface {
  title: string
  description: string
  isSelected?: boolean
}

const Card: React.FC<CardInterface> = ({
  title,
  description,
  isSelected = false
}) => {
  return (
    <CardContainer isSelected={isSelected}>
      <Icon
        iconId={isSelected ? 'saltActive' : 'salt'}
        height={104}
        width={104}
      />
      <CardTextContainer isSelected={isSelected}>
        <HeadlineThree color="blue">{title}</HeadlineThree>
        <BodyTwo>{description}</BodyTwo>
      </CardTextContainer>
      <CardActionContainer isSelected={isSelected}>
        <HeadlineThree color="red">US$ 10</HeadlineThree>
        <Button
          label={isSelected ? 'Remove' : 'Add'}
          backgroundColor={isSelected ? 'yellow' : 'red'}
          iconId={isSelected ? 'close' : 'rightArrow'}
        />
      </CardActionContainer>
    </CardContainer>
  )
}

export default Card
