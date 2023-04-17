import styled from "styled-components"

export const LeftColor = styled.div`
    width: 50%;
    height: 100vh;
    background: linear-gradient(0deg, rgba(131,155,205,1) 0%, rgba(181,135,207,1) 100%);

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    @media screen and (max-width: 550px){
    display: none;
  }

`
export const Svg = styled.img`
    height: 90px;
    background: none;

  
`
export  const Title = styled.h1`
    font-size: 1rem;
    color: #000;
    font-family: 'Poppins', sans-serif;
    background: none;
    text-align: center;

  `