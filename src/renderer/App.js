import React from "react";
import { CssBaseline, ThemeProvider, IconButton } from "@material-ui/core";
import { Close, Remove, Crop54 } from '@material-ui/icons';
import AppContainer from '../components/AppContainer'
import theme from "./theme";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div id='mainWindow'>
        <header id="titlebar">
          <div id="dragRegion">
          <div id="windowTitle">
            <span id='windowTitleText'>Electron App Manager</span>
          </div>
          <div id="windowControls">
          <IconButton id="closeButton" className="windowButton" component='span' disableRipple >
            <Close />
          </IconButton>
          </div>
          </div>
        </header>
        <div id='appContainer'>
          <AppContainer />
        </div>
      </div>
    </ThemeProvider>
  );
}
