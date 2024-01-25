
import { Button, Show} from '@chakra-ui/react'
import { Grid, GridItem } from '@chakra-ui/react'
function App() {
  

  return (
    <>
    <Grid templateAreas={{base:`"nav main"`,lg:`"nav nav" "aside main"`}}>
    <GridItem area={"nav"} backgroundColor="coral">
    nav
    </GridItem>
    <Show above='lg'>
    <GridItem area={"aside"} backgroundColor ="gold">
    aside
    </GridItem>
    </Show>
    <GridItem area={"main"} backgroundColor="orange">
      main
    </GridItem>
    
    </Grid>
      
    </>
  )
}

export default App
