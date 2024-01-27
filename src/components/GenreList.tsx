import { Text,List,ListItem,Image,HStack } from "@chakra-ui/react"
import useGenres  from "../hooks/useGenres"
import { getCroppedImageUrl } from "../services/image-url"
import GenreListSkeleton from "./GenreListSkeleton"


const GenreList = () => {
    const {data,error,isLoading}= useGenres()
    const genres = [1,2,3,4,5,7,8,9,10]
    if(error) return null
  return (
    <>

    <List>
        {isLoading && genres.map(genre => <GenreListSkeleton key={genre}/>)}
    {data.map(genre =>
    <ListItem paddingY={2}>
        <HStack >
        <Image src={getCroppedImageUrl(genre.image_background)}
          borderRadius={8} boxSize={"32px"}/>
        <Text >{genre.name}</Text>
        </HStack>
    </ListItem>
    )}
    </List>
    </>
  )
}

export default GenreList