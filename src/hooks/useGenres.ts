import useData from "./useData";

export interface genres {
    id: number;
    name: string;
    image_background:string
   
  }
  
  const useGenres = () => useData<genres>("/genres")
export default useGenres
    
    
