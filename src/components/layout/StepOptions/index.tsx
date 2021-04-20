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
import enhancer from './hooks'

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
  handleCardClick: (option: string) => () => void
  selectedOption: string
  stepNotValid: boolean
}

const StepOptions: React.FC<StepOptionsInterface> = ({
  title,
  description,
  items,
  handleCardClick,
  selectedOption,
  stepNotValid
}) => {
  return (
    <StepOptionsContainer>
      <StepOptionsText>
        <HeadlineTwo>{title}</HeadlineTwo>
        <BodyOne>{description}</BodyOne>
      </StepOptionsText>
      <StepOptionsWrapper>
        {items.map((e, idx) => (
          <Card
            item={e}
            key={idx}
            isSelected={selectedOption === e}
            buttonAction={handleCardClick(e)}
          />
        ))}
      </StepOptionsWrapper>
      <StepOptionsActions>
        <Button
          iconPosition="left"
          label="back"
          buttonStyle="text"
          labelColor="blue"
          iconColor="blue"
        />
        <Button label="next" isDisabled={stepNotValid} />
      </StepOptionsActions>
    </StepOptionsContainer>
  )
}

export default enhancer(StepOptions)
