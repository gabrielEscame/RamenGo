import composer from '../../../../utils/composer'
import { useState } from 'react'

const useStepOptions = () => {
  const [selectedOption, setSelectedOption] = useState<string>('')

  const handleCardClick = (option: string) => () => {
    const isOptionCurrentSelected = option === selectedOption
    setSelectedOption(isOptionCurrentSelected ? '' : option)
  }

  const stepNotValid = selectedOption === ''

  return {
    handleCardClick,
    selectedOption,
    stepNotValid
  }
}

export default composer(useStepOptions)
