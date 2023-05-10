import React, { useContext, useEffect, useState } from 'react'
import './Homebody.css'
import GenreCards from '../GenreCards/GenreCards';
import axios from 'axios';
import { AppContext } from '../../Store';


function Homebody() {
  const [movies, setMovies] = useState([]);
  const state = useContext(AppContext)
  console.log(state)

  useEffect(() => {
      try {
           axios.get('http://localhost:5000/movies').then((response)=>{
          console.log(response.data)
          setMovies(response.data);
        })
      } catch (error) {
        console.error(error);
      }
    // fetchMovies();
  }, []);


  const genres = [...new Set(movies.map((movie) => movie.genre))];
  return (
    <div className="App"> 
      {genres.map((genre) => (
        <GenreCards key={genre} genre={genre} Allmovies={movies} />
      ))}
    </div>
  );
}

export default Homebody
