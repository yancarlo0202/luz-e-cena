import CardMovie from "../CardMovie"
import type { Movie } from "../types";
import styles from "./MovieList.module.css"

import React from 'react'

interface MovieListProps {
    movies: Movie[];
}

const MovieList = ({ movies }: MovieListProps) => {
  return (
    <ul className={styles.lista}>
        {movies.map((movie) => (
            <CardMovie key={movie.id} {...movie} />
        ))}
    </ul>
  )
}

export default MovieList