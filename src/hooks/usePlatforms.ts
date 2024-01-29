import useData from "./useData"


interface  platform{
    id: number,
    name:string
}

export const usePlatforms =() => useData<platform>("/platforms/lists/parents") 