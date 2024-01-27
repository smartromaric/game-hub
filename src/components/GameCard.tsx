import { Card,CardBody,Image,Heading,HStack } from "@chakra-ui/react"
import { Game } from "../hooks/useGame"
import PlatformIconList from "./PlatformIconList"
import CriticScore from "./CriticScore"
import { getCroppedImageUrl } from "../services/image-url"





interface Props{
    game:Game
   
}


const GameCard = ({game}:Props) => {
  return (
    <Card borderRadius={10} overflow={"hidden"}>
        <Image src={getCroppedImageUrl(game.background_image)}/>
        <CardBody>
            <Heading size={"lg"}>{game.name}</Heading>
            <HStack justifyContent={"space-between"}>
            <PlatformIconList platforms={game.parent_platforms.map( ({platform}) => platform)}/>
            <CriticScore score={game.metacritic}/>
            </HStack>
        </CardBody>
    </Card>
  )
}

export default GameCard