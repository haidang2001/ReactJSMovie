import React, { useState,useEffect } from "react";
import { useParams } from "react-router";
import ReactPlayer from "react-player";
export function MovieDe(){
    let { id } = useParams();
    const API = `https://api.themoviedb.org/3/movie/${id}/videos?&api_key=d65576ff8c623925ca8cfb1cfd60e5ac`;
    const [video,setVideo] = useState([]);

    useEffect(() =>{ 
            fetch(API)
            .then((res) => res.json())
            .then((data) => {
                // console.log(data.results);
                setVideo(data.results[0]);
            });
        
	},[id])

    const youtubeUrl = "https://www.youtube.com/watch?v=";
    const movieplayer = <ReactPlayer
                            className="container-fluid"
                            url={youtubeUrl + video.key}
                            // playing
                            width="100%"
                        ></ReactPlayer>
    
    return (
        <div>
            {movieplayer}
        </div>
    )

}