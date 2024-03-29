import { Grid, GridItem ,HStack,Show,Box} from '@chakra-ui/react'
import NavBar from './components/NavBar'
import GameGrid from './components/GameGrid'
import GenreList from './components/GenreList'
import { useState } from 'react'
import { genres } from './hooks/useGenres'
import PlatformSelector from './components/PlatformSelector'
import { Platform } from './hooks/useGame'
import SortSelector from './components/SortSelector'
import GameHeading from './components/GameHeading'


export interface GameQuery{
  sort:string | null
  genre: genres | null
  platform : Platform | null
  searchText:string
}

function App() {
  const [gameQuery,setGameQuery] = useState<GameQuery>({} as GameQuery)
  // const [selectGenre,setSelectGenre] = useState<genres | null >(null)
  // const [selectPlatform,setSelectPlatform] = useState<Platform|null>(null)
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
    <NavBar onSearch={(searchText) => setGameQuery({...gameQuery,searchText})}/>
    
    </GridItem>
    <Show above='lg'>
    <GridItem area={"aside"} paddingX={5}>
    <GenreList selectedgenre={gameQuery.genre} onselectGenre={(genre) => setGameQuery({...gameQuery,genre})}/>
    </GridItem>
    </Show>
    <GridItem area={"main"}>
    <Box marginLeft={3}>
      <GameHeading gameQuery={gameQuery}/>
        <HStack  marginBottom={2}>
      <PlatformSelector  selectedPlatform={gameQuery.platform}  onselectPlatform={(platform) => setGameQuery({... gameQuery,platform})}/>
      <SortSelector gameQuery={gameQuery} onSelectSortSelector={(sort) => setGameQuery({... gameQuery,sort})}/>
        </HStack>
    </Box>
    <GameGrid gameQuery={gameQuery}/>
    </GridItem>
    
    </Grid>
      
    </>
  )
}

export default App
