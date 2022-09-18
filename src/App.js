import React, { useEffect, useState } from 'react'
import PopularMovies from './components/PopularMovies';
import { Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation';
import PopularTvShows from './components/PopularTvShows';
import Details from './components/Details';


const App = () => {
  const [popular, setPopular] = useState([]);
  const [tvshow, settvshow] = useState([]);
  const url = "https://api.themoviedb.org/3/movie/popular?api_key=9c6c6f5bfd0c02ce2ddedf1b16fd5c2c&language=en-US&page=1";
  const tvurl = "https://api.themoviedb.org/3/tv/popular?api_key=9c6c6f5bfd0c02ce2ddedf1b16fd5c2c&language=en-US&page=1";

  useEffect(() => {
    fetchPopular();
    fetchTvShow();
  }, []);

  const fetchTvShow = async () => {
    const data = await fetch(tvurl);
    const tvShow = await data.json();
    console.log(tvShow);
    settvshow(tvShow.results);
  };
  const fetchPopular = async () => {
    const data = await fetch(url);
    const movies = await data.json();
    // console.log(movies);
    setPopular(movies.results);
  };

  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path='/home' element={<PopularMovies popular={popular} setPopular={setPopular} />} />
        <Route path='/popular/tvshow' element={<PopularTvShows tvshow={tvshow} settvshow={settvshow} />} />
        <Route path='/movie/:id' element={<Details />} />

      </Routes>
      {/* <PopularMovies popular={popular} setPopular={setPopular} /> */}
    </div >
  )
}

export default App;