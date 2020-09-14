import React , { useState, useEffect } from 'react'
import axios from './axios';
import requests from './requests'

function Banner() {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
       async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            // this function get index element from table
            let randomIndex = Math.floor(Math.random() * request.data.results.length -1);
            setMovie(request.data.results[randomIndex]);
            return request;
       }
       fetchData();
    }, [])

    console.log(movie);
    return (
        <header className="banner"
            style={{
                backgroundSize: "cover",
                backgroundImage: `url(
                    "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
                )`,
                backgroundPosition: "center center",
            }}
        > {/* ${movie?.backdrop_path} , if exist put it if dont dont !*/}
            <div className="banner__contents"> 
                <h1> {/* If statement == optional Chaining*/}
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>
                <div className="banner__buttons">
                    <button className="banner__button">Play</button>
                    <button className="banner__button">My List</button>
                </div>

                <h1 className="banner__description">
                    {movie?.overview}
                </h1>

            </div>
        </header>
    )
}

export default Banner
