import React from "react";
import { BrowserRouter } from 'react-router-dom'
import AppRouter from "../processes/routing/AppRouter";
import { Grid } from "@mui/material";
import { observer } from "mobx-react-lite";
import SideNav from "../widgets/SideNav/SideNav";
import './styles.css'

const App = observer(() => {

  return (
    <BrowserRouter>
      <Grid container>
        <Grid item xs={2}>
            <SideNav />
        </Grid>
        <Grid item xs={10}>
            <AppRouter />
        </Grid>
      </Grid>
    </BrowserRouter>
  );
})

export default App;
