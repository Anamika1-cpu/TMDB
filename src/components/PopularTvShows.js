import React from 'react'
import { Link } from 'react-router-dom'

const PopularTvShows = ({ tvshow, settvshow }) => {
    let showsList = (
        <h3 className="text-center text-danger">No movies available</h3>
    );

    if (tvshow) {
        showsList = tvshow.map((show) => (
            <div className="container d-flex flex-wrap">
                <div key={show.id} className="card ml-10 mb-3"
                    style={{ width: "18rem" }}>
                    <img height="200" src={"https://image.tmdb.org/t/p/w500" + show.backdrop_path} alt="" />
                    <Link to={`/tv/${show.id}`}>
                        <h5 className="mt-2">{show.name}</h5>

                    </Link>
                    {/* <h5 className="mt-2">{show.name}</h5> */}
                </div>
            </div>
        ))
    }
    return (
        <div>
            <h2>Popular tv shows</h2>
            <div>{showsList}</div>
        </div>
    )
}

export default PopularTvShows;