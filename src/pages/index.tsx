import React from 'react'
import { Container } from '../styles/pages/Home'
import Head from '../components/infra/Head'
import { HeadlineTwo } from '../components/foundation/Typography'
import Card from '../components/layout/Card'
import Input from '../components/forms/Input'

const Home: React.FC = () => {
  return (
    <Container>
      <Head title="ramenGo!" />
      <main>
        <HeadlineTwo color="yellow">ramenGo!</HeadlineTwo>
        <Card item="vegetables" isSelected={false} />
        <Input onChange={e => console.log(e.target.value)} label="Label"/>
      </main>
    </Container>
  )
}

export default Home
