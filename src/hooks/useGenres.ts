import useData from "./useData";

export interface genres {
    id: number;
    name: string;
   
  }
  
  const useGenres = () => useData<genres>("/genres")
export default useGenres
    
    
