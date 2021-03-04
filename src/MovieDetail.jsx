import React from "react";


export default function MovieDetail({ movie }) {
    if(!movie) {
        return <div> Select a movie </div>;
    }

    return(
        <div> 
            <h2>{movie.title}</h2>
            <h4>{movie.original_title}</h4>
            <p> {movie.description} </p>
            <div>
                Director: {movie.director}
            </div>
            <div>
                Producer: {movie.producer}
            </div>
            <div>
                Release Year: {movie.release_date}
            </div>
        </div>
    );
}