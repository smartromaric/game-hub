import useData from "./useData";
import { genres } from "./useGenres";


export interface Platform{
  id: number,
  name:string,
  slug:string
}
export interface Game {
    id: number;
    name: string;
    background_image:string
    parent_platforms:{platform:Platform}[]
    metacritic: number
  }
 
  const useGames = (selectedGenre:genres|null,selectedPLatform:Platform|null) => useData<Game>("/games",{params:{genres:selectedGenre?.id,platforms:selectedPLatform?.id}},[selectedGenre?.id,selectedPLatform?.id])
export default useGames
