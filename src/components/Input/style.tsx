import styled from "styled-components";

export const LabelName = styled.label`
font-size: 1rem;
color: #000;
font-family: 'Poppins', sans-serif;

`
export const InputName = styled.input`
background-color: #e7e2e2;
width: ${(props) => props.width};
height: 30px;
border-radius: 12px;
border: 4px solid #839bcd;
box-shadow: 0;
outline:0;
margin: .5rem 0;
font-size: 1rem;
font-family: 'Poppins', sans-serif;
`

export const MessageInput = styled.textarea`
background-color: #e7e2e2;
width: 78%;
height: 30px;
border-radius: 12px;
border: 4px solid #839bcd;
box-shadow: 0;
outline:0;
margin: .5rem 0;
font-size: 1rem;
font-family: 'Poppins', sans-serif;
height: 20vh;
overflow-wrap: break-word;
padding: 1%;
`

export const SubmitButton = styled.button`
  width: 20%;
  height: 7.5vh;
  margin: 1rem 0;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 1rem;
  font-family: 'Poppins', sans-serif;

  background-color: #32d22d;

  border-radius: 12px;
`

export const Form = styled.form`
background-color: none;
width: 100%;
height: 100%;
padding:  1rem;
display: flex;
margin-left: 10%;
 
flex-direction: column;
`