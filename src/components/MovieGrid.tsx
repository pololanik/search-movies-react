import React, {FC} from "react";
import Grid from "@material-ui/core/Grid";
import Movie from "./Movie";
import {IMovie} from "../types";

type MovieGridProps = {
    items: Array<IMovie>,
    onSetFavorites: (ids: Array<string>) => void,
    favoriteMovies: Array<string>
}

const MovieGrid: FC<MovieGridProps> = props => {

    const handleToggleFavorite = (id: string, active: boolean) => {
        if (active) {
            props.onSetFavorites([...props.favoriteMovies, id])
        } else {
            props.onSetFavorites(props.favoriteMovies.filter((i) => i !== id))
        }
    }

    return (
        <Grid container spacing={1}>
            {props.items.map((item) => (
                <Grid key={item.title} item xs={4}>
                    <Movie
                        onToggleFavorite={(active) => handleToggleFavorite(item.title, active)}
                        favorite={props.favoriteMovies.includes(item.title)}
                        id={item.title}
                        imgSrc={item.poster}
                    />
                </Grid>
            ))}
        </Grid>
    );
};

export default MovieGrid;
