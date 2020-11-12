import React, {FC} from "react";
import Grid from "@material-ui/core/Grid";
import Movie from "./Movie";
import {IMovie} from "./types";

type MovieGridProps = {
    items: Array<IMovie>,
    onClickMovie: (movie: IMovie) => void
}

const MovieGrid: FC<MovieGridProps> = props => {
    return (
        <Grid container spacing={1}>
            {props.items.map((item) => (
                <Grid key={item.title} item xs={4}>
                    <Movie id={item.title} imgSrc={item.poster} onClick={() => props.onClickMovie(item)}/>
                </Grid>
            ))}
        </Grid>
    );
};

export default MovieGrid;
