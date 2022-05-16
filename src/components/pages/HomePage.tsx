import React from 'react';
import {useAuth} from "../../hooks/use-auth";
import {useDispatch} from "react-redux";
import {NavLink} from "react-router-dom";
import {ADD_HOSTEL_ROUTE, LOGIN_ROUTE, REGISTER_ROUTE} from "../../utils/const";
import {Box, Grid} from "@material-ui/core";

const HomePage = () => {
    const {isAuth, email} = useAuth();
    const dispatch = useDispatch();
    return isAuth ? (
        <Grid container
              style={{height: window.innerHeight - 50}}
              alignItems={"center"}
              justify={"center"}
        >
            <Box p={5}>
                <p>
                    Вы успешно вошли в аккаунт. Теперь вы можете <NavLink to={ADD_HOSTEL_ROUTE}>добавить</NavLink> свой отель.
                </p>
            </Box>
        </Grid>
    ) : (
        <Grid container
              style={{height: window.innerHeight - 50}}
              alignItems={"center"}
              justify={"center"}
        >
            <Box p={5}>
                <p>
                    Это сайт Looking. Здесь вы можете добавить свой отель, предварительно <NavLink to={LOGIN_ROUTE}>авторизовавшись</NavLink> или <NavLink to={REGISTER_ROUTE}>создав</NavLink> аккаунт.
                </p>
            </Box>
        </Grid>
    )
};

export default HomePage;