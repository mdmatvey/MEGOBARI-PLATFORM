import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../shared/consts/styles/styleConsts";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import PublicRoundedIcon from '@mui/icons-material/PublicRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import LoginRoundedIcon from '@mui/icons-material/LoginRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import { LOGIN_ROUTE, MAIN_ROUTE, SETTINGS_ROUTE } from '../../shared/routes/routeConsts';
import { Context } from '../..';
import { observer } from 'mobx-react-lite';

const drawerWidth = 260;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

const SideNav = observer(({ burgerMarginLeft }) => {
    const navigate = useNavigate()

    const { userStore } = useContext(Context)

    const [open, setOpen] = useState(false);
  
    const handleDrawerOpen = () => {
      setOpen(true);
    };
  
    const handleDrawerClose = () => {
      setOpen(false);
    };

    return ( 
        <ThemeProvider theme={theme}>
            <Box display="flex" sx={{ flexGrow: 1, overflow: 'hidden' }}>
                <CssBaseline />
                <AppBar sx={{ width: 0 }} position="static" open={open}>
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleDrawerOpen}
                            edge="start"
                            sx={{
                                color: theme.palette.secondary.main,
                                marginRight: 5,
                                marginLeft: burgerMarginLeft,
                                position: 'fixed',
                                ...(open && { display: 'none' }),
                            }}
                        >
                            <MenuIcon />
                        </IconButton>
                    </Toolbar>
                </AppBar>
                <Drawer variant="permanent" open={open}>
                    <DrawerHeader sx={{ background: theme.palette.primary.main }}>
                        <IconButton 
                            onClick={handleDrawerClose}
                            sx={{
                                color: theme.palette.secondary.main,
                                ...(!open && { display: 'none' }),
                            }}
                        >
                            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                        </IconButton>
                    </DrawerHeader>
                    <List sx={{ height: '100%', background: theme.palette.primary.main }}>
                        <ListItem 
                            disablePadding 
                            onClick={() => navigate(MAIN_ROUTE)}
                            sx={{ display: 'block' }}
                        >
                            <ListItemButton
                                sx={{
                                    color: theme.palette.secondary.main,
                                    minHeight: 48,
                                    justifyContent: open ? 'initial' : 'center',
                                    px: 2.5,
                                }}
                            >
                                <ListItemIcon
                                    sx={{
                                        color: theme.palette.secondary.main,
                                        minWidth: 0,
                                        mr: open ? 3 : 'auto',
                                        justifyContent: 'center',
                                    }}
                                >
                                    <PublicRoundedIcon />
                                </ListItemIcon>
                                <ListItemText primary={'Главная'} sx={{ opacity: open ? 1 : 0 }} />
                            </ListItemButton>
                        </ListItem>
                        <ListItem 
                            disablePadding 
                            onClick={() => navigate(SETTINGS_ROUTE)} 
                            sx={{ display: 'block' }}
                        >
                            <ListItemButton
                                sx={{
                                    color: theme.palette.secondary.main,
                                    minHeight: 48,
                                    justifyContent: open ? 'initial' : 'center',
                                    px: 2.5,
                                }}
                            >
                                <ListItemIcon
                                    sx={{
                                        color: theme.palette.secondary.main,
                                        minWidth: 0,
                                        mr: open ? 3 : 'auto',
                                        justifyContent: 'center',
                                    }}
                                >
                                    <SettingsRoundedIcon />
                                </ListItemIcon>
                                <ListItemText primary={'Настройки'} sx={{ opacity: open ? 1 : 0 }} />
                            </ListItemButton>
                        </ListItem>
                        <ListItem 
                            disablePadding 
                            onClick={() => {
                              if (userStore.isAuth) {
                                userStore.setIsAuth(false)
                              } else {
                                navigate(LOGIN_ROUTE)
                              }
                            }} 
                            sx={{ display: 'block' }}
                        >
                            <ListItemButton
                                sx={{
                                    color: theme.palette.secondary.main,
                                    minHeight: 48,
                                    justifyContent: open ? 'initial' : 'center',
                                    px: 2.5,
                                }}
                            >
                                <ListItemIcon
                                    sx={{
                                        color: theme.palette.secondary.main,
                                        minWidth: 0,
                                        mr: open ? 3 : 'auto',
                                        justifyContent: 'center',
                                    }}
                                >
                                    {userStore.isAuth ? <LogoutRoundedIcon /> : <LoginRoundedIcon />}
                                </ListItemIcon>
                                <ListItemText primary={userStore.isAuth ? 'Выйти' : 'Войти'} sx={{ opacity: open ? 1 : 0 }} />
                            </ListItemButton>
                        </ListItem>
                    </List>
                </Drawer>
            </Box>
        </ThemeProvider>
    );
})
 
export default SideNav;