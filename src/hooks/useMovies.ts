import {IMovie} from "../types";
import db from "../db.json";
import {useCallback, useEffect, useMemo, useState} from "react";

const filterMovies = (search: String): IMovie[] => {
    const searchLower = search.toLowerCase()
    return db.filter(movie => movie.title.toLowerCase().includes(searchLower) || movie.storyline.toLowerCase().includes(searchLower))
}

const useMovies = () => {
    const [searchString, setSearchString] = useState<string>("")

    const movies: IMovie[] = useMemo(() =>searchString.length > 3 ? filterMovies(searchString) : [], [searchString])

    useEffect(() => {
      document.title = `Search - ${searchString}`
    }, [searchString])


    const clear = useCallback(() => {
        setSearchString('')
    }, [])

    const change = useCallback((value: string) => {
        setSearchString(value)
    }, [])

    const noResults = searchString.length > 3 && movies.length === 0

    return {
        movies, searchString, clear, change, noResults
    }
}

export default useMovies
