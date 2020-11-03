import React, {FC, MouseEventHandler} from "react";
import PropTypes from "prop-types";
import Paper from "@material-ui/core/Paper";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import RemoveIcon from "@material-ui/icons/Clear"

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            marginTop: theme.spacing(2),
            padding: `${theme.spacing(1)}px ${theme.spacing(2)}px`,
            marginBottom: theme.spacing(1),
            display: 'flex',
            alignItems: 'center',
        },
        input: {
            fontSize: '1.5rem'
        },
        divider: {
            height: 28,
            margin: 4,
        },
    }),
);

type SearchInputProps = {
    value: string,
    onChange: React.ChangeEventHandler<HTMLInputElement>,
    onClear: () => void
}
const SearchInput: FC<SearchInputProps> = props => {
    const classes = useStyles();
    return (
        <Paper className={classes.root}>
            <InputBase
                value={props.value}
                onChange={props.onChange}
                className={classes.input}
                placeholder="Search Movies"
                fullWidth
            />
            <Divider orientation="vertical" className={classes.divider}/>
            <IconButton disabled={!props.value} color="primary" onClick={props.onClear}>
                <RemoveIcon/>
            </IconButton>
        </Paper>
    );
};

export default SearchInput;
