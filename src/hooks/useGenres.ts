import genreData from "../../data/genres"

export interface genres {
    id: number;
    name: string;
    image_background:string
   
  }
  
  const useGenres = () => ({data:genreData,error:null,isLoading:null})
export default useGenres
    
    
