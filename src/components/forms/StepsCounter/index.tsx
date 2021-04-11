import React, { Fragment } from 'react'
import { LabelTwo } from '../../foundation/Typography'
import {
  StepsCounterContainer,
  StepsCounterText,
  StepsCounterProgress
} from './style'
import Icon from '../../foundation/Icon'

interface StepInterface {
  name: string
}

interface StepsCounterInterface {
  steps: Array<StepInterface>
  currentStep: number
}

const isStepDone = (stepIndex: number, currentStep: number) => {
  if (stepIndex + 1 <= currentStep) {
    return true
  } else {
    return false
  }
}

const isLastStep = (stepIndex: number, stepsLength: number) => {
  if (stepIndex + 1 === stepsLength) {
    return true
  } else {
    return false
  }
}

const Noop = () => null

const StepsCounter: React.FC<StepsCounterInterface> = ({
  steps,
  currentStep
}) => {
  return (
    <StepsCounterContainer>
      <StepsCounterText>
        {steps.map((e, idx) => (
          <LabelTwo key={idx} done={isStepDone(idx, currentStep)}>
            {e.name}
          </LabelTwo>
        ))}
      </StepsCounterText>
      <StepsCounterProgress>
        {steps.map((_, idx) => (
          <Fragment key={idx}>
            <Icon
              iconId={isStepDone(idx + 1, currentStep) ? 'check' : 'circle'}
              color={isStepDone(idx, currentStep) ? 'yellow' : 'vanilla'}
              colorVariation={isStepDone(idx, currentStep) ? 'main' : 'dark'}
              height={16}
              width={16}
            />
            {isLastStep(idx, steps.length) ? (
              <Noop />
            ) : (
              <Icon
                iconId="pasta"
                height={8}
                width={80}
                color={isStepDone(idx + 1, currentStep) ? 'yellow' : 'vanilla'}
                colorVariation={
                  isStepDone(idx + 1, currentStep) ? 'main' : 'dark'
                }
              />
            )}
          </Fragment>
        ))}
      </StepsCounterProgress>
    </StepsCounterContainer>
  )
}

export default StepsCounter
