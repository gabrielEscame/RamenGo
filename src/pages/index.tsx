import React from 'react'
import { Container } from '../styles/pages/Home'
import Head from '../components/infra/Head'
import { HeadlineTwo } from '../components/foundation/Typography'

const Home: React.FC = () => {
  return (
    <Container>
      <Head title="RamenGo" />
      <main>
        <HeadlineTwo color="vanilla">Hello world</HeadlineTwo>
      </main>
    </Container>
  )
}

export default Home
