import compose from '../../../../utils/compose'

const useStepsCounter = () => {
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

  return {
    isStepDone,
    isLastStep
  }
}

export default compose(useStepsCounter)
