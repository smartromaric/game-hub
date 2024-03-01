import { Image, ImageProps } from "@chakra-ui/react"
import thumbsup from "../assets/like.png"
import meh from "../assets/meh.png"
import bullsEye from "../assets/goal.png"

interface Props{
    rating:number
}

const Emoji = ({rating}:Props) => {
    if (rating < 3) return null;
    const EmojiMap:{[key:number]:ImageProps} = {
        3:{src:meh,alt:'meh',boxSize:"25px"},
        4:{src:thumbsup,alt:'recommended',boxSize:"25px", },
        5:{src:bullsEye,alt:"bullsEye",boxSize:"35px"}
    }
  return (
    <Image {...EmojiMap[rating]} marginTop={1} />
  )
}

export default Emoji