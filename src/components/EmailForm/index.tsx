import React, { useState } from 'react';
import { Form, InputName, LabelName, MessageInput, SubmitButton } from './style';
import emailjs from 'emailjs-com';

const EmailForm = () => {

  const SERVICE_ID = 'gmailForm';
  const TEMPLATE_ID = 'template_729ximg';
  const USER_ID = 'o_8iMEK5GWeQaAmR5';

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(fields);

    const templateParams = {
      from_name: fields.name,
      email: fields.email,
      to_name: "Esmyrna",
      to_email: "esmyrna.oliveira@gmail.com",
      subject: fields.subject,
      message: fields.message.replace(/\n/g, "<br>") // Converte quebras de linha em <br> para manter o formato do texto
    };

    // Envia o e-mail
    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, USER_ID)
      .then((response) => {
        console.log('E-mail enviado com sucesso!', response.status, response.text);
      }, (error) => {
        console.log('Erro ao enviar e-mail:', error);
      });
  }

  const [fields, setFields] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFields({
      ...fields,
      [e.target.name]: e.target.value
    });
  };

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFields({
      ...fields,
      message: e.target.value
    });
  };

  return (
    <Form onSubmit={handleFormSubmit}>
      <LabelName>Nome</LabelName>
      <InputName width={"80%"} type="name" name="name" onChange={handleInputChange} required></InputName>
      <LabelName>E-mail </LabelName>
      <InputName width={"80%"} type="email" name="email" onChange={handleInputChange} required></InputName>
      <LabelName>Assunto </LabelName>
      <InputName width={"80%"} type="text" name="subject" onChange={handleInputChange} required></InputName>
      <LabelName>Mensagem </LabelName>
      <MessageInput required onChange={handleMessageChange} />

      <SubmitButton type="submit">Enviar e-mail</SubmitButton>
    </Form>
  );
};

export default EmailForm;