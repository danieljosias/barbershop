import React from 'react'
import { Container } from './styles'
import errors from '../../utils/errors.json'

export default function InputError({field, type}) {
  return (
    <Container>
      <span>{errors[field][type]}</span>
    </Container>
  )
}
