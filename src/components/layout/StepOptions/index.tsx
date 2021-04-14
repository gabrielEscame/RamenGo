import React from 'react'
import Button from '../../forms/Button'
import { BodyOne, HeadlineTwo } from '../../foundation/Typography'
import Card from '../Card'
import {
  StepOptionsContainer,
  StepOptionsText,
  StepOptionsWrapper,
  StepOptionsActions
} from './style'

interface StepOptionsInterface {
  title: string
  description: string
  items: Array<
    | 'salt'
    | 'shoyu'
    | 'miso'
    | 'veggie'
    | 'rice'
    | 'wheat'
    | 'pork'
    | 'chicken'
    | 'tofu'
    | 'vegetables'
    | 'mushroom'
    | 'egg'
  >
}

const StepOptions: React.FC<StepOptionsInterface> = ({
  title,
  description,
  items
}) => {
  return (
    <StepOptionsContainer>
      <StepOptionsText>
        <HeadlineTwo>{title}</HeadlineTwo>
        <BodyOne>{description}</BodyOne>
      </StepOptionsText>
      <StepOptionsWrapper>
        {items.map((e, idx) => (
          <Card item={e} key={idx} />
        ))}
      </StepOptionsWrapper>
      <StepOptionsActions>
          <Button iconPosition='left' label="back"/>
          <Button label="next" isDisabled={true}/>
      </StepOptionsActions>
    </StepOptionsContainer>
  )
}

export default StepOptions
