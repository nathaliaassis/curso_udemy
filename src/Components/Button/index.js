import React from 'react'
import { Container } from './styles'

export default function Button(props) {
  return (
    <Container
      type='button'
      bg={props.action && 'linear-gradient(to left, #ff5f6d, #ffc371)'}
      bgHover={props.action && 'linear-gradient(to left, #e0414e, #ea9d38)'}
      color={props.action && '#fff'}
      className={props.className}
      onClick={e => props.click && props.click(props.label)}
    >
      {props.label}
    </Container>
  )
}
