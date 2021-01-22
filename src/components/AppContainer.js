import React, { Component } from 'react'
import { CssBaseline, ThemeProvider, IconButton } from "@material-ui/core";
import theme from "../renderer/theme";

/* Component Import */
import AppSelector from './AppSelector'
import AppPanel from '../components/AppPanel';

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

        console.log(this.appDetails)

        return (
            <div id="appContainer">
                <AppSelector 
                selectedApp={this.state.selectedApp} 
                handler={this.switchApp} 
                appDetails={this.appDetails}
                />
                <AppPanel app={this.state.selectedApp} />
            </div>
        )
    }
}
