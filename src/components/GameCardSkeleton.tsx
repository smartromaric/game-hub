import { Skeleton,Card,CardBody,SkeletonText } from "@chakra-ui/react" 

const GameCardSkeleton = () => {
  return (
    <Card width={"200px"} >
        <Skeleton height={"200px"}/>
        <CardBody>
            <SkeletonText/>
        </CardBody>
    </Card>
  )
}

export default GameCardSkeleton