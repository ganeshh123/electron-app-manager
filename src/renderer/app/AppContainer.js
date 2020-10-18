import React, { Component } from 'react'
import { CssBaseline, ThemeProvider, IconButton } from "@material-ui/core";
import theme from "./theme";

/* Component Import */
import AppSelector from './AppSelector'

/* Utility Import */
let readAppDetails = require('../utils/read_app_details')

export default class AppContainer extends Component {

    appDetails = readAppDetails()

    state = {
        alerts: {},
        selectedApp: 'discord'
    }

    switchApp = (event) => {
        let appName = event.target.value
        this.setState({
            selectedApp: appName
        })
    }   


    render = () => {
        return (
            <AppSelector 
                selectedApp={this.state.selectedApp} 
                handler={this.switchApp} 
                appDetails={this.appDetails}
            />
        )
    }
}
