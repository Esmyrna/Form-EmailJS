import React from 'react'
import { Form, InputName, LabelName } from './style'

const Input = () => {
  return (
    <Form>
      <LabelName>Nome </LabelName>
      <InputName width={"80%"} type="name" required></InputName>
      <LabelName>E-mail </LabelName>
      <InputName width={"80%"} type="email" required></InputName>
      <LabelName>Assunto </LabelName>
      <InputName width={"50%"} type="text" required></InputName>

    </Form>
  )
}

export default Input