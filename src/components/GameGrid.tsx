import { Text,SimpleGrid } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContener from "./GameCardContener";
import { GameQuery } from "../App";
import useGames from "../hooks/useGame";

interface Props {
  gameQuery: GameQuery
 
}

const GameGrid = ({gameQuery}:Props) => {
const {data,error,isLoading}=useGames(gameQuery)
const skeleton = [1,2,3,4,5,6,7,8,9,10]

if (error) return <Text>{error}</Text>
  return (
    <>
    <SimpleGrid columns={{sm:1,md:2,lg:3,xl:4}} spacing={3} padding={"10px"}>
    {isLoading&&skeleton.map(sk => <GameCardContener key={sk}><GameCardSkeleton /></GameCardContener>)}
      {data.map((game) => (
       <GameCardContener key={game.id}>
         <GameCard  game={game}/>
       </GameCardContener>
      ))}
    </SimpleGrid>
    </>
  );
};

export default GameGrid;
