import React, {FC} from 'react';
import {Button, Card, CardActions, CardContent, Typography} from "@material-ui/core";
import dbJson from "./db.json";
import {IMovie} from "./types";
import {makeStyles} from "@material-ui/core/styles";
import { useHistory } from 'react-router-dom';
import Alert from "@material-ui/lab/Alert";


const useStyles = makeStyles({
    media: {
        width: '100%'
    }
});

type MovieDetailProps = {
    movieId: string
}

const MovieDetail: FC<MovieDetailProps> = props => {
    const history = useHistory()
    const classes = useStyles()
    const movie: IMovie | undefined = dbJson.find(i => i.title === props.movieId);

    if (!movie) {
        return <Alert severity="error">Movie not found</Alert>
    }

    const handleClickBack = () => {
        history.goBack();
    }

    return (
        <Card>
            <img className={classes.media} src={movie.poster}/>
            <CardContent>
                <Typography variant="h4" gutterBottom>{movie.title}</Typography>
                <Typography variant="body2">{movie.storyline}</Typography>
            </CardContent>
            <CardActions>
                <Button color="primary" onClick={handleClickBack}>Back</Button>
            </CardActions>
        </Card>
    );
};

export default MovieDetail;
