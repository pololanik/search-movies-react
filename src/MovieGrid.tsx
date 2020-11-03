import React, {FC} from "react";
import Grid from "@material-ui/core/Grid";
import Movie from "./Movie";
import Zoom from "@material-ui/core/Zoom";
import {IMovie} from "./types";

type MovieGridProps = {
    items: Array<IMovie>,
    onClickMovie: (movie: IMovie) => void
}

const MovieGrid: FC<MovieGridProps> = props => {
    return (
        <Zoom in={props.items.length > 0} mountOnEnter unmountOnExit>
            <Grid container spacing={1}>
                {props.items.map((item) => (
                    <Grid key={item.title} item xs={12} md={4}>
                        <Movie imgSrc={item.poster} onClick={() => props.onClickMovie(item)}/>
                    </Grid>
                ))}
            </Grid>
        </Zoom>
    );
};

export default MovieGrid;
