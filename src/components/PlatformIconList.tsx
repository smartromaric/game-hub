import {FaWindows,FaXbox,FaPlaystation,FaApple,FaAndroid,FaLinux} from "react-icons/fa"
import {MdPhoneIphone} from "react-icons/md"
import {SiNintendo} from "react-icons/si"
import {BsGlobe} from "react-icons/bs"
import { Platform } from "../hooks/useGame"
import { HStack,Icon } from "@chakra-ui/react"
import { IconType } from "react-icons/lib"

interface Props{
    platforms:Platform[]
}
const PlatformIconList = ({platforms}:Props) => {
    const Icons : {[key:string]:IconType} = {
        pc: FaWindows,
        xbox:FaXbox,
        playstation:FaPlaystation,
        apple:FaApple,
        android:FaAndroid,
        linux:FaLinux,
        iphone:MdPhoneIphone,
        nintendo:SiNintendo,
        web:BsGlobe
    }
  return (
    <HStack marginY={2} color={"gray.500"}>
            {platforms.map( (platform) => <Icon as={Icons[platform.slug]}/>)}

    </HStack>
  )
}

export default PlatformIconList