import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import BedIcon from '@mui/icons-material/Bed';
import {NavLink} from "react-router-dom";
import {Grid, Link} from "@material-ui/core";
import {ADD_HOSTEL_ROUTE, HOME_ROUTE, LOGIN_ROUTE} from "../utils/const";
import {useAuth} from "../hooks/use-auth";
import {useDispatch} from "react-redux";
import {removeUser} from "../slices/userSlice";


const Navbar = () => {
    const {isAuth, email} = useAuth();
    const dispatch = useDispatch();
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);


    return (
        <AppBar position="static" style={{ background: '#212121' }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>

                    {/*надпись looking и лого*/}
                    <BedIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />

                    <Typography
                        variant="h6"
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            flexGrow: 1,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 300,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        LOOKING
                    </Typography>

                    <Grid container justify={"flex-end"}>
                        { isAuth?
                            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'space-between'}}>
                                <NavLink to={ADD_HOSTEL_ROUTE}>
                                    <Button
                                        sx={{ my: 2, color: 'white', display: 'block' }}
                                    >
                                        Добавить отель
                                    </Button>
                                </NavLink>
                            </Box>
                            :
                            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            </Box>
                        }

                    </Grid>


                    <Box>
                    <Grid container justify={"flex-end"}>
                        {isAuth ?
                            <NavLink to={HOME_ROUTE}>
                                <Button
                                    variant={"outlined"}
                                    sx={{ my: 2, color: 'white', display: 'block', textDecoration: 'none' }}
                                    onClick={() => dispatch(removeUser())}>
                                    Выйти
                                </Button>
                            </NavLink>
                            :
                            <NavLink to={LOGIN_ROUTE}>
                                <Button
                                    variant={"outlined"}
                                    sx={{ my: 2, color: 'white', display: 'block', textDecoration: 'none' }}
                                    >
                                    Войти
                                </Button>
                            </NavLink>
                        }
                    </Grid>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default Navbar;