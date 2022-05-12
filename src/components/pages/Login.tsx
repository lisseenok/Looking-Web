import React from 'react';
import {Container, Grid, Link} from "@material-ui/core";
import Box from "@mui/material/Box";
import {LOGIN_ROUTE, REGISTER_ROUTE} from "../../utils/const";
import {NavLink} from "react-router-dom";

const Login = () => {
    return (
        <Container>
            <Grid container
                  style={{height: window.innerHeight - 50}}
                  alignItems={"center"}
                  justify={"center"}
            >
                <Box p={5}>
                    <p>
                        Нет аккаунта? <NavLink to={REGISTER_ROUTE}>Зарегестрируйтесь</NavLink>
                    </p>

                </Box>

            </Grid>
        </Container>
    );
};

export default Login;