import React, { useState } from 'react';
import './GenreCards.css';
import Singlecard from '../Singlecard/Singlecard';

function GenreCards({ genre, Allmovies }) {
    const [movies, setMovies] = useState(() => {

        return Allmovies.filter((movie) => movie.genre === genre);
    })

    const deleteAmovie = (id) => {
        setMovies(() => {
            console.log(movies)
            return movies.filter((movie) => {
                console.log(movie)
                console.log(movie._id != id)

                if (movie._id != id) {
                    return movie
                }
            })
        })
    }


    return (
        <div className="genre-cards">
            <h2>{genre}</h2>
            <div className="cards">
                {movies.map((movie) => (
                    <Singlecard
                        key={movie._id}
                        deleteAmovie={deleteAmovie}
                        id={movie._id}
                        title={movie.title}
                        description={movie.description}
                        duration={movie.duration}
                        img={movie.image}
                    />
                ))}
            </div>
        </div>
    );
}

export default GenreCards;
