import React from 'react'
import { Container, Header, Body } from './styles'

export default function Card(props) {
  return (
    <Container>
      <Header bg={props.color || '#fff'}>{props.titulo}</Header>
      <Body>
        {props.children}
      </Body>
    </Container>
  )
}
