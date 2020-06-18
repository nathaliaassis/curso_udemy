import React from 'react'
import { Container } from './styles'

export default function Display(props) {
  return (
    <Container>
      {props.value}
    </Container>
  )
}
