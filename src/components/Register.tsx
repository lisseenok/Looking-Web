import React from 'react';
import Form from "./Form";
import {useDispatch} from "react-redux";
import {setUser} from "../slices/userSlice";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"
import {useHistory} from "react-router-dom";
import {HOME_ROUTE} from "../utils/const";

const Register = () => {
    const dispatch = useDispatch();
    const {push} = useHistory();
    const handleRegister = (email: any, password: any) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
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
            title="Зарегистрироваться"
            handleClick={handleRegister}
        />
    );
};

export default Register;