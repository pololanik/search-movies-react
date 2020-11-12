import React, {FC} from 'react';
import { useHistory, useLocation } from 'react-router-dom'
import './App.css';
import SearchInput from "./SearchInput";
import MovieGrid from "./MovieGrid";
import db from './db.json'
import {IMovie} from "./types";

const getMovies = (search: String): IMovie[] => {
    const searchLower = search.toLowerCase()
    return db.filter(movie => movie.title.toLowerCase().includes(searchLower) || movie.storyline.toLowerCase().includes(searchLower))
}

const SearchMovie: FC = () => {
    const history = useHistory()
    const location = useLocation()
    const search = new URLSearchParams(location.search)
    const searchString = search.get('q') || ''

    const movies: IMovie[] = searchString.length > 3? getMovies(searchString) : []
    const handleChangeSearchValue = (value: string) => {
        history.replace(value ? `/?q=${value}` : '')
    }

    const handleClickClear = () => {
        history.replace('')
    }

    const handleClickMovie = (movie: IMovie) => {
        // console.log(movie) just for illustration
    }

    return (
        <>
            <SearchInput value={searchString} onClear={handleClickClear} onChange={handleChangeSearchValue}/>
            {searchString.length > 3 && movies.length === 0
                ? 'No results'
                : <MovieGrid items={movies} onClickMovie={handleClickMovie}/>
            }
        </>
    );
}

export default SearchMovie;
