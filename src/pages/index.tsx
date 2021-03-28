import React from 'react'
import { Container } from '../styles/pages/Home'
import Head from '../components/infra/Head'

const Home: React.FC = () => {
  return (
    <Container>
      <Head title="RamenGo" />
      <main>
        <h1>🤘 Hello world 🤘</h1>
      </main>
    </Container>
  )
}

export default Home
