import React from 'react'
import { Container } from './styles'

function Item({img}) {
  return (
    <Container>
      <img src={img} alt="imagem do corrousel" />
    </Container>
  )
}

export default Item
