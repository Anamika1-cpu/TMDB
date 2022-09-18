import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';



const Details = () => {

    const [movie, setvideo] = useState(null);
    const { id } = useParams();
    console.log(id);
    const videourl = `https://api.themoviedb.org/3/movie/${id}?api_key=9c6c6f5bfd0c02ce2ddedf1b16fd5c2c&language=en-US`;
    // const videourl = `https://api.themoviedb.org/3/movie/${id}/videos/popular?api_key=9c6c6f5bfd0c02ce2ddedf1b16fd5c2c&language=en-US&page=1`;
    // const tvurl = "https://api.themoviedb.org/3/tv/popular?api_key=9c6c6f5bfd0c02ce2ddedf1b16fd5c2c&language=en-US&page=1";


    const GetVideo = async () => {
        const { data } = await axios.get(videourl);
        console.log(data);
        setvideo(data);
        // console.log(videourl);
    }
    useEffect(() => {
        GetVideo();
    }, []);

    const st = {
        borderRadius: 10,
        top: 70,
        left: 50,
    };
    const stb = {
        width: 1690,
        height: 755,

    }
    const overlay = {
        width: 1690,
        height: 766,
        top: 65,
        // backgroundColor: ' rgba(0, 0, 0, 0.5)',
        backgroundColor: 'rgba(31.5, 10.5, 10.5, 0.89)'
    }
    const str = {
        width: 1500,
        height: 500,
        // backgroundColor: 'blue',
        color: 'white',
        marginTop: '120 px'
    }


    return (
        <div className="mt-4" width="100%" height="100%">
            <img style={stb} src={`https://image.tmdb.org/t/p/w500${movie?.backdrop_path}`} alt=''></img>
            < br ></br>
            <div className="position-absolute d-flex justify-content-between" style={overlay} width="100%" height="100%">
                <div className="mt-5 mx-5"><img className="" style={st} height="500" src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`} alt=''></img></div>
                <div className="mt-5" style={str}>
                    {/* <h2>{movie?.original_title}</h2> */}
                    <h2>{movie?.title}</h2>
                    <p>{movie?.release_date}</p>
                    <h6>{movie?.status}</h6>
                    <h5><i>{movie?.tagline}</i></h5>
                    <h4>Overview</h4>
                    <p className="fontSize=20">{movie?.overview}</p>

                </div>
                {/* <img className="position-absolute " style={st} height="500" src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`} alt=''></img> */}
            </div>
        </div >
    )
}

export default Details