import React from 'react'
import { Container } from './styles'

export default function CardBarber({name, img}) {
  return (
    <Container>
        <div className='card'>
          <div className='card__inner'>
            <img  className='card__img' src={img} alt="foto do barbeiro" />
            <span className='card__name' >{name}</span>
          </div>
        </div>
    </Container>
  )
}
