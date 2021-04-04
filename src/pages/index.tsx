import React from 'react'
import { Container } from '../styles/pages/Home'
import Head from '../components/infra/Head'
import { HeadlineTwo } from '../components/foundation/Typography'
import Button from '../components/forms/Button'
import Icon from '../components/foundation/Icon'

const Home: React.FC = () => {
  return (
    <Container>
      <Head title="ramenGo!" />
      <main>
        <HeadlineTwo color="blue">ramenGo!</HeadlineTwo>
        <Button label="add" backgroundColor="yellow" />
      </main>
    </Container>
  )
}

export default Home
