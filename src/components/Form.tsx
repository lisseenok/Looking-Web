import React from 'react';
import {useState} from "react";
import Button from "@mui/material/Button";
import {Grid} from "@material-ui/core";

const Form = ({title, handleClick}:{title:any, handleClick:any}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <Grid container
              direction="column"
              justify={"center"}
        >
            <input
                type={"email"}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={email}
            />
            <input
                type={"password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder={password}
            />
            <Button onClick={() => handleClick(email, password)}>
                {title}
            </Button>
        </Grid>
    );
};

export default Form;