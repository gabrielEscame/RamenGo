import React from 'react'

const compose = (...functions) => (Component: React.FC) => {
  return props => {
    const composeProps = functions.reduceRight((enhacerFunction, func) => {
      const functionsProps = func(enhacerFunction)
      return {
        ...enhacerFunction,
        ...functionsProps
      }
    }, {})
    return <Component {...props} {...composeProps} />
  }
}

export default compose
