import { Menu,MenuButton,MenuItem,MenuList,Button } from "@chakra-ui/react"
import { BsChevronDown } from "react-icons/bs"
import { GameQuery } from "../App"


interface Props{
    gameQuery:GameQuery
    onSelectSortSelector:(sortSelector:string) => void
}


const SortSelector = ({onSelectSortSelector,gameQuery}:Props) => {
    const SortSelector = [
        {value:"",label:"Relevance"},
        {value:"-added",label:"Date added"},
        {value:"name",label:"Name"},
        {value:"-release",label:"Release date"},
        {value:"-metacritic",label:"Popularity"},
        {value:"-rating",label:"Average rating"}
        
    ]
       
    const currentSort = SortSelector.find(sort => sort.value === gameQuery.sort) || SortSelector[0]
    return (
        <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown/>}>
        Order by : {currentSort?.label}
      </MenuButton>
      <MenuList>
        {SortSelector.map(selector => <MenuItem onClick={() =>onSelectSortSelector(selector.value) } key={selector.value} value={selector.value}>{selector.label}</MenuItem>)}
      </MenuList>
    </Menu>
      )
}

export default SortSelector