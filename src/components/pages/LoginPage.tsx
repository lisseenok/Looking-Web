import React from 'react';
import {Container, Grid, Link} from "@material-ui/core";
import Box from "@mui/material/Box";
import {LOGIN_ROUTE, REGISTER_ROUTE} from "../../utils/const";
import {NavLink} from "react-router-dom";
import Login from "../Login";

const LoginPage = () => {
    return (
        <Container>
            <Grid container
                  style={{height: window.innerHeight - 50}}
                  alignItems={"center"}
                  direction="column"
                  justify={"center"}
            >
                <Box p = {5}>
                    <Login/>
                </Box>

                <Box p={5}>
                    Нет аккаунта? <NavLink to={REGISTER_ROUTE}>Зарегистрируйтесь</NavLink>
                </Box>

            </Grid>
        </Container>
    );
};

export default LoginPage;