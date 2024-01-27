import { SkeletonText ,SkeletonCircle,ListItem,HStack,Box } from "@chakra-ui/react"
const GenreListSkeleton = () => {
    
  return (
    <ListItem paddingY={2}>
        <Box>
            <HStack >
                <SkeletonCircle borderRadius={8} boxSize={"32px"}/>
                <SkeletonText noOfLines={1} width={"50px"} />
            </HStack>
        </Box>
    </ListItem>
    )
}

export default GenreListSkeleton