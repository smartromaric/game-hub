import { Grid, GridItem ,Show} from '@chakra-ui/react'
import NavBar from './components/NavBar'
import GameGrid from './components/GameGrid'
import GenreList from './components/GenreList'
import { useState } from 'react'
import { genres } from './hooks/useGenres'
import PlatformSelector from './components/PlatformSelector'


function App() {
  const [selectGenre,setSelectGenre] = useState<genres | null >(null)

  return (
    <>
    <Grid 
    templateAreas={{base:`"nav" "main"`,lg:`"nav nav" "aside main"`}}
    templateColumns={{
      base:"1fr",
      lg:"200px 1fr" 
      // 200px pour aside a le reste pour main
    }}
    >
    <GridItem area={"nav"}  >
    <NavBar/>
    
    </GridItem>
    <Show above='lg'>
    <GridItem area={"aside"} paddingX={5}>
    <GenreList selectedgenre={selectGenre} onselectGenre={(genre) => setSelectGenre(genre)}/>
    </GridItem>
    </Show>
    <GridItem area={"main"}>
    <PlatformSelector/>
    <GameGrid selectedGenre={selectGenre}/>
    </GridItem>
    
    </Grid>
      
    </>
  )
}

export default App
