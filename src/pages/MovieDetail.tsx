import React, {FC, useEffect, useState} from 'react';
import {Button, Card, CardActions, CardContent, Typography} from "@material-ui/core";
import dbJson from "../db.json";
import {IMovie} from "../types";
import {makeStyles} from "@material-ui/core/styles";
import { useHistory } from 'react-router-dom';
import Alert from "@material-ui/lab/Alert";
import firebase from "firebase/app";
import {useUser} from "../utils/firebase";
import Comments from "../components/Comments";


const useStyles = makeStyles((theme) =>({
    media: {
        width: '100%'
    },
    storyline: {
        marginBottom: theme.spacing(2)
    }
}));

type MovieDetailProps = {
    movieId: string
}

const MovieDetail: FC<MovieDetailProps> = props => {
    const history = useHistory()
    const classes = useStyles()
    const movie: IMovie | undefined = dbJson.find(i => i.title === props.movieId);

   const user = useUser()

    if (!movie) {
        return <Alert severity="error">Movie not found</Alert>
    }

    const handleClickBack = () => {
        history.push('/');
    }

    return (
        <Card>
            <img className={classes.media} src={movie.poster}/>
            <CardContent>
                <Typography variant="h4" gutterBottom>{movie.title}</Typography>
                <Typography variant="body2" gutterBottom className={classes.storyline}>{movie.storyline}</Typography>
                <Typography variant="h5" gutterBottom>Comments</Typography>
                <Comments movieId={props.movieId} />
            </CardContent>
            <CardActions>
                <Button color="primary" onClick={handleClickBack}>Back</Button>
            </CardActions>
        </Card>
    );
};

export default MovieDetail;
