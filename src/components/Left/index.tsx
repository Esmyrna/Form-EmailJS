import { LeftColor } from './style'
import { Svg } from './style'
import { Title } from './style'
import favicon from "../../assets/favicon.png"

const Left = () => {
  return (
    <>
     <LeftColor>
          <Svg src={`https://creazilla-store.fra1.digitaloceanspaces.com/emojis/52865/incoming-envelope-emoji-clipart-xl.png`}></Svg>
          <Title>Shoes Shop </Title>
        </LeftColor>
    </>
  )
}

export default Left
