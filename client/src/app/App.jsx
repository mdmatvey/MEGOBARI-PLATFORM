import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter } from 'react-router-dom'
import AppRouter from "../processes/routing/AppRouter";
import { observer } from "mobx-react-lite";
import SideNav from "../widgets/SideNav/SideNav";
import './styles.css'
import { Context } from "..";

const App = observer(() => {
  const { userStore } = useContext(Context)

  window.addEventListener('resize', function (event) {
    userStore.setUserWidth(document.body.clientWidth)
    userStore.setUserHeight(document.body.clientHeight)
  })

  const [burgerMarginLeft, setBurgerMarginLeft] = useState(-1.5)

  useEffect(() => {
    if (userStore.userWidth < 600) {
      setBurgerMarginLeft(-1)
    } else if (userStore.userWidth >= 600) {
      setBurgerMarginLeft(-1.5)
    }
  }, [userStore.userWidth])

  return (
    <BrowserRouter>
      <SideNav burgerMarginLeft={burgerMarginLeft} />
      <div style={{ marginLeft: 64 }}>
        <AppRouter />
      </div>
    </BrowserRouter>
  );
})

export default App;
