import React, {FC} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import SearchMovie from "./pages/SearchMovie";
import MovieDetail from "./pages/MovieDetail";
import {Container, createMuiTheme, Typography} from "@material-ui/core";
import {makeStyles, ThemeProvider} from '@material-ui/core/styles';
import {blue, pink} from "@material-ui/core/colors";
import Alert from "@material-ui/lab/Alert";
import CssBaseline from '@material-ui/core/CssBaseline';


const theme = createMuiTheme({
    palette: {
        type: 'dark',
        primary: blue,
        secondary: pink,
    },
});

const useStyles = makeStyles({
    '@global': {
        body: {
            margin: '20px 0'
        }
    }
});


const App: FC = props => {
    useStyles()
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Container maxWidth="sm">
                <Typography variant="h3" component="h1" gutterBottom>Movie Database</Typography>
                <BrowserRouter>
                    <Switch>
                        <Route path="/" component={SearchMovie} exact />
                        <Route
                            path="/movie/:movieId"
                            render={({ match }) => <MovieDetail movieId={match.params.movieId} />}
                        />
                        <Route>
                            <Alert severity="error">404</Alert>
                        </Route>
                    </Switch>
                </BrowserRouter>
            </Container>
        </ThemeProvider>
    );
};


export default App;
