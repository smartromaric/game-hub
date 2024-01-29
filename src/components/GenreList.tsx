import { List,ListItem,Image,HStack, Button } from "@chakra-ui/react"
import useGenres, { genres }  from "../hooks/useGenres"
import { getCroppedImageUrl } from "../services/image-url"
import GenreListSkeleton from "./GenreListSkeleton"

interface Props{
  onselectGenre :(genre:genres) =>void
  selectedgenre:genres|null
}

const GenreList = ({onselectGenre,selectedgenre}:Props) => {
    const {data,error,isLoading}= useGenres()
    const genres = [1,2,3,4,5,7,8,9,10]
    if(error) return null
  return (
    <>

    <List>
        {isLoading && genres.map(genre => <GenreListSkeleton key={genre}/>)}
    {data.map(genre =>
    <ListItem paddingY={2} key={genre.id}>
        <HStack >
        <Image src={getCroppedImageUrl(genre.image_background)}
          borderRadius={8} boxSize={"32px"}/>
        <Button variant={"link"} fontWeight={selectedgenre?.id === genre.id?"bold":'normal'} onClick={() => onselectGenre(genre)}>{genre.name}</Button>
        </HStack>
    </ListItem>
    )}
    </List>
    </>
  )
}

export default GenreList