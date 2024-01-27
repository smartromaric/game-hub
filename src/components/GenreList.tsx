import { Text } from "@chakra-ui/react"
import useGenres, { genres } from "../hooks/useGenres"

const GenreList = () => {
    const {data,error}= useGenres()
  return (
    <>
    {error&&<p>{error}</p>}
    {data.map(genre =><Text >{genre.name}</Text>)}
    </>
  )
}

export default GenreList