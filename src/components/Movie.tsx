import React, { FC } from "react";
import Paper from "@material-ui/core/Paper";
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import ButtonBase from "@material-ui/core/ButtonBase";
import { Link as RouterLink } from 'react-router-dom';
import StarIcon from '@material-ui/icons/Star'
import {IconButton} from "@material-ui/core";



const useStyles = makeStyles((theme: Theme) => ({
        root: {
            overflow: "hidden",
            position: "relative"
        },
        image: {
            width: "100%",
            display: "block"
        },
        star: {
            position: "absolute",
            color: ({favorite}: { favorite: boolean }) => favorite ? 'gold' : 'white',
            right: theme.spacing(1),
            top: theme.spacing(1),
        }
    }))


type MovieProps = {
    imgSrc: string,
    id: string,
    favorite: boolean,
    onToggleFavorite: (active: boolean) => void
}

const Movie: FC<MovieProps> = ({ favorite, id, imgSrc, onToggleFavorite}) => {
    const classes = useStyles({ favorite })
    const handleToggleFavorite = () => {
        onToggleFavorite(!favorite)
    }
    return (
        <Paper className={classes.root}>
            <ButtonBase component={RouterLink} to={`/movie/${id}`} className={classes.root}>
                <img className={classes.image} src={imgSrc}/>
            </ButtonBase>
            <IconButton className={classes.star} onClick={handleToggleFavorite} aria-label="delete">
                <StarIcon />
            </IconButton>
        </Paper>
    );
};

export default Movie;
