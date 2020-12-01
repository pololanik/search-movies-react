import React, {FC, useRef} from "react";
import Paper from "@material-ui/core/Paper";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import RemoveIcon from "@material-ui/icons/Clear"
import SearchIcon from "@material-ui/icons/Search"

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
    onChange: (value: string) => void,
    onClear: () => void
}
const SearchInput: FC<SearchInputProps> = props => {
    console.log('render SearchInput');
    const inputRef = useRef<HTMLInputElement>(null)
    const [localValue, setLocalValue] = React.useState<string>(props.value);
    const isChanged = localValue === props.value;
    const classes = useStyles();
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        props.onChange(localValue)
    }

    const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLocalValue(e.target.value)
    }

    const handleClickClear = () => {
        setLocalValue('')
        props.onClear()
        inputRef.current?.focus()
    }

    return (
        <form onSubmit={handleSubmit}>
            <Paper className={classes.root}>
                <InputBase
                    inputRef={inputRef}
                    value={localValue}
                    onChange={handleChangeInput}
                    className={classes.input}
                    placeholder="Search Movies"
                    fullWidth
                />
                <Divider orientation="vertical" className={classes.divider}/>
                <IconButton color="primary" onClick={isChanged ? handleClickClear : () => props.onChange(localValue)}>
                    {localValue === props.value ? <RemoveIcon/> : <SearchIcon />}
                </IconButton>
            </Paper>
        </form>
    );
};

export default React.memo(SearchInput);
