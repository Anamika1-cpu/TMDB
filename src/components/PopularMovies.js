import React from 'react'
import { Link } from 'react-router-dom'
const PopularMovies = ({ popular, setPopular }) => {

    let moviesList = (
        <h3 className="text-center text-danger">No movies available</h3>
    );

    if (popular.length > 0) {
        moviesList = popular.map((movie) => (
            <div className="container d-flex flex-wrap">
                <div key={movie.id} className="card ml-10 mb-3"
                    style={{ width: "18rem" }}>
                    <img height="200" src={"https://image.tmdb.org/t/p/w500" + movie.backdrop_path} alt={movie.path} />
                    <Link to={`/movie/${movie.id}`}>
                        <h5 className="mt-2">{movie.title}</h5>

                    </Link>

                </div>
            </div>
        ))
    }
    return (
        <div className=" mt-2 align-text-center container">
            <h2>Popular Movies</h2>
            <div>{moviesList}</div>
        </div>
    )
}

export default PopularMovies;