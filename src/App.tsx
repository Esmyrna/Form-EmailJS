import { GlobalStyle } from "./global"
import styled from "styled-components"
import favicon from "./assets/favicon.png"
function App() {

  const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #faf6f6;

    display: flex;
     
`

  const LeftColor = styled.div`
    width: 40%;
    height: 100vh;
    background: linear-gradient(0deg, rgba(131,155,205,1) 0%, rgba(181,135,207,1) 100%);

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

`
  const Svg = styled.img`
    width: 70px;
    height: 60px;
    background: none;

  
`
  const Title = styled.h1`
    font-size: 1rem;
    color: #000;
    font-family: 'Poppins', sans-serif;
    background: none;
    text-align: center;

  `

  const RightSide = styled.div`
    width: 60%;
    display: flex;
    align-items: center;
    padding: 2rem 0%;
    flex-direction: column;
    
    
  `
  const TitleRight = styled.h1`
    color: #000;
    text-align: center;
    font-size: 1rem;
    font-family: 'Poppins', sans-serif;
     

  `
  const Form = styled.form`
    background-color: #dbd9d9;
    width: 80%;
    height: 100%;
    padding:  1rem;
    display: flex;
    flex-direction: column;
  `
  const LabelName = styled.label`
    font-size: 1rem;
    color: #000;
    font-family: 'Poppins', sans-serif;
    
  `
  const InputName = styled.input`
   background-color: #f0e7e7;
   width: 85%;
   height: 30px;
   border-radius: 12px;
   border: 4px solid #839bcd;
   box-shadow: 0;
   outline:0;

`
  
  return (
    <>
      <GlobalStyle />
      <Container>
        <LeftColor>
          <Svg src={favicon}></Svg>
          <Title>Shoes Shop </Title>
        </LeftColor>
        <RightSide>
           <TitleRight>Fale conosco</TitleRight>
           <Form>
            <LabelName>Nome </LabelName>
            <InputName type="name" required></InputName>
           
           
        </Form>
        </RightSide>
      
      
      </Container>
    </>
  )
}

export default App
