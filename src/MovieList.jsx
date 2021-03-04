import React, { useState, useEffect } from "react";

export default function MovieList({ setter }) {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const url = "https://ghibliapi.herokuapp.com/films";
        fetch(url)
        .then (r => r.json())
        .then(r => setMovies(r));
    }, []);

    return (
        <div>
            <ul>
                {movies && movies.map(movie => (
                    <li key={movie.id} onClick={e => setter(movie)}>
                        {movie.title}
                    </li>
                ))}
            </ul>
        </div>
    )
}