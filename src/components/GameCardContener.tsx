import { Box } from '@chakra-ui/react'
import { ReactNode } from 'react'


interface Props{
    children : ReactNode
}

const GameCardContener = ({children}:Props) => {
  return (
    <Box borderRadius={10} overflow={"hidden"} width={{sm:"300px",lg:"200px"}} >
        {children}
    </Box>
  )
}

export default GameCardContener