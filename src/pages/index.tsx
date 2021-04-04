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
        <HeadlineTwo color="yellow">ramenGo!</HeadlineTwo>
        <Button label="add" />
        <Icon iconId="mushroom"/>
      </main>
    </Container>
  )
}

export default Home
