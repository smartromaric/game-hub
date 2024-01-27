import useGenres from "../hooks/useGenres"
import { Text } from "@chakra-ui/react"
const GenreList = () => {
    const {genres,error}= useGenres()
  return (
    <>
    {error&&<p>{error}</p>}
    {genres.map(genre =><Text >{genre.name}</Text>)}
    </>
  )
}

export default GenreList