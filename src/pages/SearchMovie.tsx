import React, {FC, useState} from 'react';
import SearchInput from "../components/SearchInput";
import MovieGrid from "../components/MovieGrid"
import useMovies from "../hooks/useMovies";

const SearchMovie: FC = () => {
    const [favoriteMovies, setFavoriteMovies] = useState<string[]>([])

    const {movies, searchString, noResults, change, clear} = useMovies()

    return (
        <>
            <SearchInput value={searchString} onClear={clear} onChange={change}/>
            {noResults
                ? 'No results'
                : <MovieGrid onSetFavorites={setFavoriteMovies} favoriteMovies={favoriteMovies} items={movies}/>
            }
        </>
    );
}

export default SearchMovie;
