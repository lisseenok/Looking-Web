import React from 'react';
import {useState} from "react";
import Button from "@mui/material/Button";

const Form = ({title, handleClick}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div>
            <input
                type={email}
                value={email}
                onChange={(e) => setEmail(e.target.value )}
                placeholder={email}
            />
            <input
                type={password}
                value={password}
                onChange={(e) => setPassword(e.target.value )}
                placeholder={password}
            />
            <Button onClick={handleClick}>
                {title}
            </Button>
        </div>
    );
};

export default Form;