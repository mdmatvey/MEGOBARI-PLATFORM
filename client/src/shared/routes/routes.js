import { MAIN_ROUTE, SEGMENT_ROUTE, SETTINGS_ROUTE } from './routeConsts'
import Main from "../../pages/Main/Main"
import Segment from "../../pages/Segment/Segment"
import Settings from '../../pages/Settings/Settings'

export const publicRoutes = [
  {
    path: MAIN_ROUTE,
    Component: Main
  },
  {
    path: SEGMENT_ROUTE + '/:id',
    Component: Segment
  },
  /* REPLACE TO authRotes */
  {
    path: SETTINGS_ROUTE,
    Component: Settings
  },
  /* REPLACE TO authRotes */
]
