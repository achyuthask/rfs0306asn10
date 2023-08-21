import React, { useEffect, useState } from 'react'
import { Button ,Stack} from 'react-bootstrap';
import { useParams,Link } from 'react-router-dom';

const Deatilpage = () => {

    const [movie, setMovies] = useState([]);

    const {id} =useParams();

    useEffect(()=> {
        fetchMovies(id);
    }, [id]);

    const fetchMovies = async (title) => {
        try {
            let linkVal = `https://www.omdbapi.com/?t=${title}&apikey=880bc194&plot=full`;
            console.log('Link:'+linkVal);

          const response = await fetch(linkVal);
          const data = await response.json();
          if (data) {
            setMovies(data);
            console.log(data);
          } else {
            setMovies([]);
          }
        } catch (error) {
          console.error('Error:', error);
        }
      };

  return (
    <div>
     
     <Link to='/'>
        <Button variant="outline-info">Go to Home page</Button>
      </Link>

      <div>
      <Stack direction="horizontal" gap={3}>
                  <div>
                  <img src={movie.Poster} alt=" " />
                  </div>
            <div>
            <h1 >{movie.Title}</h1>
            <p>{movie.Genre}</p>
            <h5 style={{color:"red"}}>Year : {movie.Year}</h5> 
            <h5 style={{color:"gray"}}>Rated: {movie.Rated}</h5> 
            <h5 style={{color:"green"}}>Runtime: {movie.Runtime}</h5> 
            <h5 style={{color:"gray"}}> Genere: {movie.Genre}</h5> 
            <h5 style={{color:"green"}}>Director: {movie.Director}</h5> 
            <h5 style={{color:"gray"}}>Actors: {movie.Actors}</h5> 
            <h5 style={{color:"green"}}>Language: {movie.Language}</h5> 
            <h5 style={{color:"gray"}}>Country: {movie.Country}</h5> 
          <h5 style={{color:"blue"}}>Type :{movie.Type}</h5>
            <h4 style={{color:"green"}}>{movie.Plot}</h4>
           
            </div>
            </Stack>
        </div>
        
    </div>
  )
}



export default Deatilpage;
