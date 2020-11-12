import React, { FC } from "react";
import Paper from "@material-ui/core/Paper";
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import ButtonBase from "@material-ui/core/ButtonBase";
import { Link as RouterLink } from 'react-router-dom';


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            overflow: "hidden",
        },
        image: {
            width: "100%",
            display: "block"
        },
    }),
);


type MovieProps = {
    imgSrc: string,
    id: string,
    onClick: () => void;
}

const Movie: FC<MovieProps> = props => {
    const classes = useStyles()
    return (
        <Paper>
            <ButtonBase component={RouterLink} to={`/movie/${props.id}`} className={classes.root} onClick={props.onClick}>
                <img className={classes.image} src={props.imgSrc}/>
            </ButtonBase>
        </Paper>
    );
};

export default Movie;
