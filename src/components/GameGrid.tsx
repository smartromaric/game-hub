import { Text,SimpleGrid } from "@chakra-ui/react";
import useGames from "../hooks/useGame"
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContener from "./GameCardContener";
import { genres } from "../hooks/useGenres";

interface Props {
  selectedGenre : genres |null
}


const GameGrid = ({selectedGenre}:Props) => {
const {data,error,isLoading}=useGames(selectedGenre)
const skeleton = [1,2,3,4,5,6,7,8,9,10]
  return (
    <>
    {error&&<Text>{error}</Text>}
    <SimpleGrid columns={{sm:1,md:2,lg:3,xl:5}} spacing={3} padding={"10px"}>
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
