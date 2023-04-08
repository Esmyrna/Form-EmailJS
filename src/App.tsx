
import Left from "./components/Left"
import Right from "./components/Right"
import styled from "styled-components"
import { GlobalStyle } from "./global"



function App() {
  const ContainerGeral = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
   
 
`
  return (
    <>
      <GlobalStyle />
      <ContainerGeral>
        <Left />
        <Right />
      </ContainerGeral>
    </>
  )
}

export default App
