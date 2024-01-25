import { Switch ,useColorMode,HStack,Text} from "@chakra-ui/react"



const ColorModeSwitch = () => {
    const {colorMode, toggleColorMode} = useColorMode()
  return (
    <HStack>
        <Switch isChecked={colorMode === "dark"} colorScheme={"teal"} onChange={toggleColorMode}/>
        <Text>Dark Mode</Text>
    </HStack>
  )
}

export default ColorModeSwitch