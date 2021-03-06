import React from 'react';
import Form from "./Form";
import {useDispatch} from "react-redux";
import {setUser} from "../slices/userSlice";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {useHistory} from "react-router-dom";
import {HOME_ROUTE} from "../utils/const";

const Login = () => {
    const dispatch = useDispatch();
    const {push} = useHistory();
    const handleLogin = (email: any, password: any) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.getIdToken(),
                }));
                push(HOME_ROUTE);
            })
            .catch(() => alert('Что-то пошло не так :с'))

    }
    return (
        <Form
            title="Войти"
            handleClick={handleLogin}
        />
    );
};

export default Login;