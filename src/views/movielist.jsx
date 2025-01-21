import {Component} from 'react';
import MovieControlller from '../controllers/moviecontroller';
import MovieItem from './movieitem';


class MovieList extends Component{
  constructor(props){
    super(props);
    this.state={
      movies:[],
      loading:true,
      error:null

    }
  }
  componentDidMount(){
    this.fetchMovies()

  }
  fetchMovies= async()=>{
    try{
      const movies=await MovieControlller.getMovie();
      this.setState({movies,loading:false})
    }
    catch(error){
      console.log("Error",error)
      this.setState({error, loading:false})
    }
    

  }
  render(){
    const {movies ,loading ,error} = this.state;
    if(loading){
      return<h1>loading</h1>
    }
    if(error){
      return <h1>something went Wrong</h1>
    }
    return(
      <div>
        {
        movies.map((movie=> <MovieItem key={ movie.id} movie={movie}/>))
        }
        
      
        
      </div>
    )

  }


}
export default MovieList