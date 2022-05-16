import React from 'react';
import {Container, Grid} from "@material-ui/core";
import Box from "@mui/material/Box";
import {NavLink} from "react-router-dom";
import {LOGIN_ROUTE} from "../../utils/const";
import Login from "../Login";
import Register from "../Register";

const RegisterPage = () => {
    return (
        <Container>
            <Grid container
                  style={{height: window.innerHeight - 50}}
                  alignItems={"center"}
                  direction="column"
                  justify={"center"}
            >
                <Box p = {5}>
                    <Register/>
                </Box>
                <Box p={5}>
                    <p>
                        Уже есть аккаунт? <NavLink to={LOGIN_ROUTE}>Войдите</NavLink>
                    </p>

                </Box>

            </Grid>
        </Container>
    );
};

export default RegisterPage;