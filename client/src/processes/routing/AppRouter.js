import { observer } from 'mobx-react-lite'
import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { publicRoutes } from '../../shared/routes/routes'
import { MAIN_ROUTE } from '../../shared/routes/routeConsts'

const AppRouter = observer(() => {

  return (
        <Routes>
            {publicRoutes.map(({ path, Component }) => <Route key={path} path={path} element={<Component />} exact />)}
            <Route path='*' element={<Navigate to={MAIN_ROUTE} />} />
        </Routes>
  )
})

export default AppRouter
