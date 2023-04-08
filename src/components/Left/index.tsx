import { LeftColor } from './style'
import { Svg } from './style'
import { Title } from './style'
import favicon from "../../assets/favicon.png"

const Left = () => {
  return (
    <>
     <LeftColor>
          <Svg src={favicon}></Svg>
          <Title>Shoes Shop </Title>
        </LeftColor>
    </>
  )
}

export default Left
