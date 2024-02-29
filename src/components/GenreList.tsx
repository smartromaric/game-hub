import { List,ListItem,Image,HStack, Button,Heading } from "@chakra-ui/react"
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
    <Heading fontSize={"2xl"} marginBottom={5}>Genres</Heading>
    <List>
        {isLoading && genres.map(genre => <GenreListSkeleton key={genre}/>)}
    {data.map(genre =>
    <ListItem paddingY={2} key={genre.id}>
        <HStack >
        <Image objectFit={"cover"} src={getCroppedImageUrl(genre.image_background)}
          borderRadius={8} boxSize={"32px"}/>
        <Button textAlign={"left"} whiteSpace={"normal"} variant={"link"} fontWeight={selectedgenre?.id === genre.id?"bold":'normal'} onClick={() => onselectGenre(genre)}>{genre.name}</Button>
        </HStack>
    </ListItem>
    )}
    </List>
    </>
  )
}

export default GenreList