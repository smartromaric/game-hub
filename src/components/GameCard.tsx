import { Card,CardBody,Image,Heading } from "@chakra-ui/react"
import { Game } from "../hooks/useGame"
import PlatformIconList from "./PlatformIconList"





interface Props{
    game:Game
   
}


const GameCard = ({game}:Props) => {
  return (
    <Card borderRadius={10} overflow={"hidden"}>
        <Image src={game.background_image}/>
        <CardBody>
            <Heading size={"lg"}>{game.name}</Heading>
            <PlatformIconList platforms={game.parent_platforms.map( ({platform}) => platform)}/>
            {}
        </CardBody>
    </Card>
  )
}

export default GameCard