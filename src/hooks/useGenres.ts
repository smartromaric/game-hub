import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";



export interface genres {
    id: number;
    name: string;
   
  }
  interface FetchGenresResponse {
    count: number;
    results: genres[];
  }
  
  const useGenres = () => {
    const [genres, setGenres] = useState<genres[]>([]);
    const [error, setError] = useState("");
    // const [isLoading, setLoading] = useState(false);
  
    useEffect(() => {
        const controller = new AbortController()
        // setLoading(true)
      apiClient
        .get<FetchGenresResponse>("/genres",{signal:controller.signal})
        .then((res) => {setGenres(res.data.results)
            //setLoading(false)
        })
        .catch(err => {
            if(err instanceof CanceledError) return 
            setError(err.message)
            // setLoading(false)
        
        })
        return () => controller.abort()
    }, []);
    return {genres,error};
}
export default useGenres
