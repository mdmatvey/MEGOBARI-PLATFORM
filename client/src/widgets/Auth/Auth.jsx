import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../shared/consts/styles/styleConsts';
import { NavLink, useNavigate } from 'react-router-dom';
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../../shared/routes/routeConsts';
import { useLocation } from 'react-router-dom';
import { login, registration } from './api/userAPI';
import { useContext, useState } from 'react';
import { Context } from '../..';
import { MAIN_ROUTE } from '../../shared/routes/routeConsts';

function Copyright(props) {
    
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://megobari.su/">
        MEGOBARI
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const Auth = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const { userStore } = useContext(Context) 

  const isLoginPage = location.pathname === LOGIN_ROUTE

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [mailing, setMailing] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
        let data
  
        if (isLoginPage) {
          data = await login(email, password)
        } else {
          data = await registration(firstName, lastName, email, password, mailing)
        }
  
        userStore.setUser(data)
        userStore.setIsAuth(true)
        navigate(MAIN_ROUTE)
    } catch (e) {
        alert(e.response.data.message)
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            {isLoginPage ? 'Вход' : 'Регистрация'}
          </Typography>
          <Box component="form" noValidate onSubmit={(e) => handleSubmit(e)} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              { 
                !isLoginPage &&
                <>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      autoComplete="given-name"
                      name="firstName"
                      required
                      fullWidth
                      id="firstName"
                      label="Имя"
                      autoFocus
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      required
                      fullWidth
                      id="lastName"
                      label="Фамилия"
                      name="lastName"
                      autoComplete="family-name"
                    />
                  </Grid>
                </>
              }
              <Grid item xs={12}>
                <TextField
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  fullWidth
                  id="email"
                  label="Email адрес"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  fullWidth
                  name="password"
                  label="Пароль"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              { 
                !isLoginPage &&
                <Grid item xs={12}>
                  <FormControlLabel
                    control={<Checkbox value={mailing} onChange={() => setMailing(prevState => !prevState)} color="primary" />}
                    label="Я хочу получать рекламные уведомления"
                  />
                </Grid>
              }
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              {isLoginPage ? 'Войти' : 'Зарегистрироваться'}
            </Button>
            { !isLoginPage &&
              <Typography>Нажимая кнопку "Зарегистрироваться", Вы соглашаетесь с ...</Typography>
            }
            <Grid container justifyContent="flex-end">
              <Grid item>
                <NavLink to={isLoginPage ? REGISTRATION_ROUTE : LOGIN_ROUTE} style={{ textDecoration: 'none' }}>
                  <Link variant="body2">
                    {isLoginPage ? 'Ещё нет аккаунта? Зарегистрируйтесь' : 'Уже есть аккаунт? Войдите'}
                  </Link>
                </NavLink>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}

export default Auth