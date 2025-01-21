import MovieModel from "../model/moviemodel";
import axios from "axios"

class MovieControlller{
  static async getMovie(){
    try{
      const response=await axios.get(`https://api.themoviedb.org/3/trending/all/day?language=en-US&api_key=6c8d87e33d28de88271648109bc07856`)
      return response.data.results.map(movie=> new MovieModel(movie.id,movie.title,movie.poster_path))
    }
    catch(error){console.log("Error",error)}
  }

} 
export default MovieControlller