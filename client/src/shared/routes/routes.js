import { MAIN_ROUTE, SEGMENT_ROUTE, SETTINGS_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE } from './routeConsts'
import Main from "../../pages/Main/Main"
import Segment from "../../pages/Segment/Segment"
import Settings from '../../pages/Settings/Settings'
import Login from '../../pages/Login/Login'

export const publicRoutes = [
  {
    path: MAIN_ROUTE,
    Component: Main
  },
  {
    path: SEGMENT_ROUTE + '/:id',
    Component: Segment
  },
  {
    path: LOGIN_ROUTE,
    Component: Login
  },
  {
    path: REGISTRATION_ROUTE,
    Component: Login
  },
  /* REPLACE TO authRotes */
  {
    path: SETTINGS_ROUTE,
    Component: Settings
  },
  /* REPLACE TO authRotes */
]
