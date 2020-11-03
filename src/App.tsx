import React, {FC, useState} from 'react';
import './App.css';
import {Container} from "@material-ui/core";
import SearchInput from "./SearchInput";
import MovieGrid from "./MovieGrid";
import db from './db.json'
import {IMovie} from "./types";

const getMovies = (search: String): IMovie[] => {
    const searchLower = search.toLowerCase()
    return db.filter(movie => movie.title.toLowerCase().includes(searchLower) || movie.storyline.toLowerCase().includes(searchLower))
}

const App: FC = () => {
    const [searchValue, setSearchValue] = useState<string>('')
    const [movies, setMovies] = useState<IMovie[]>([])

    const handleChangeSearchValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value)
        if (e.target.value.length > 2) {
            const nextResults = getMovies(e.target.value)
            setMovies(nextResults)
        } else {
            setMovies([])
        }
    }

    const handleClickClear = () => {
        setMovies([])
        setSearchValue('')
    }

    const handleClickMovie = (movie: IMovie) => {
        // console.log(movie) just for illustration
    }

    return (
        <Container maxWidth="sm">
            <SearchInput value={searchValue} onClear={handleClickClear} onChange={handleChangeSearchValue}/>
            <MovieGrid items={movies} onClickMovie={handleClickMovie}/>
        </Container>
    );
}

export default App;
