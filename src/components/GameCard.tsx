import { Card,CardBody,Image,Heading } from "@chakra-ui/react"
import { Game } from "../hooks/useGame"

interface Props{
    game:Game
}

const GameCard = ({game}:Props) => {
  return (
    <Card borderRadius={10}>
        <Image src={game.background_image}/>
        <CardBody>
            <Heading>{game.name}</Heading>
        </CardBody>
    </Card>
  )
}

export default GameCard