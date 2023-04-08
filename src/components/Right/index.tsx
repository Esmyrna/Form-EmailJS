import React from 'react'
 
import { Form, InputName, LabelName, RightSide, TextArea, TitleRight } from './style'

const Right = () => {
  return (
    <RightSide>
      <TitleRight>Fale conosco</TitleRight>
      <Form>
      <LabelName>Nome </LabelName>
      <InputName width={"80%"} type="name" required></InputName>
      <LabelName>E-mail </LabelName>
      <InputName width={"80%"} type="email" required></InputName>
      <LabelName>Assunto </LabelName>
      <InputName width={"50%"} type="text" required></InputName>
       <LabelName>Texto</LabelName>
           <TextArea></TextArea>
    </Form>

    </RightSide>
      
       
    
  )
}

export default Right
