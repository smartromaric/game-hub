import { Text,SimpleGrid } from "@chakra-ui/react";
import useGames from "../hooks/useGame"
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContener from "./GameCardContener";



const GameGrid = () => {
const {data,error,isLoading}=useGames()
const skeleton = [1,2,3,4,5,6,7,8,9,10]
  return (
    <>
    {error&&<Text>{error}</Text>}
    <SimpleGrid columns={{sm:1,md:2,lg:3,xl:5}} spacing={10} padding={"10px"}>
    {isLoading&&skeleton.map(sk => <GameCardContener><GameCardSkeleton key={sk}/></GameCardContener>)}
      {data.map((game) => (
       <GameCardContener>
         <GameCard key={game.id} game={game}/>
       </GameCardContener>
      ))}
    </SimpleGrid>
    </>
  );
};

export default GameGrid;
