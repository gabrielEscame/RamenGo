import React from 'react'
import NextHead from 'next/head'

interface HeadInterface {
  title: string
}

const Head: React.FC<HeadInterface> = ({ title }) => {
  return (
    <NextHead>
      <title>{title}</title>
    </NextHead>
  )
}

export default Head
