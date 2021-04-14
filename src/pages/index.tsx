import React from 'react'
import { Container } from '../styles/pages/Home'
import Head from '../components/infra/Head'
import StepOptions from '../components/layout/StepOptions'
import StepsCounter from '../components/layout/StepsCounter'

const Home: React.FC = () => {
  return (
    <Container>
      <Head title="ramenGo!" />
      <StepsCounter
        steps={[
          { name: 'Broth' },
          { name: 'Noodles' },
          { name: 'Meat' },
          { name: 'Toppings' },
          { name: 'Order' }
        ]}
        currentStep={1}
      />
      <StepOptions
        title="First things first: select your favorite broth."
        description="It will give the whole flavor on your ramen soup. "
        items={['salt', 'shoyu', 'miso']}
      />
    </Container>
  )
}

export default Home
