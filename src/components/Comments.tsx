import React, {FC, useEffect, useState} from 'react';
import {useUser} from "../utils/firebase";
import firebase from "firebase/app";
import {Button, Divider, Grid, TextField, Typography} from "@material-ui/core";

const db = firebase.firestore()

type MovieDetailProps = {
    movieId: string
}

type Comment = {
    createdBy: string;
    movieId: string;
    text: string;
    date: firebase.firestore.Timestamp
}

const commentsCollections = db.collection("comments") as firebase.firestore.CollectionReference<Comment>

const Comments: FC<MovieDetailProps> = props => {
    const [text, setText] = useState<string>("")
    const user = useUser()
    const [comments, setComments] = useState<(Comment & {id: string})[]>([])

    useEffect(() => {
        commentsCollections
            .orderBy("date")
            .where('movieId', "==", props.movieId)
            .onSnapshot((querySnapshot) =>
                setComments(querySnapshot.docs.map(d => ({id: d.id, ...d.data()}))))
    }, [])

    const onAdd = async () => {
        if (!user) {
            return
        }
        await commentsCollections.add({
            createdBy: user?.uid,
            text,
            movieId: props.movieId,
            date: firebase.firestore.Timestamp.now()
        })
        setText('')
    }

    return (
        <Grid container spacing={1} alignItems="center">
            <Grid item xs={10}>
                <TextField
                    fullWidth
                    variant="outlined"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
            </Grid>
            <Grid item>
                <Button variant="outlined" onClick={onAdd}>Add</Button>
            </Grid>

            {comments.map((comment) => (
                <Grid item xs={12} key={comment.id}>
                    <Typography variant="caption">{comment.date.toDate().toDateString()}</Typography>
                    <Typography>{comment.text}</Typography>
                    <Divider/>
                </Grid>
            ))}
        </Grid>
    );
};

export default Comments;
