import React, { Component } from 'react'
import { CssBaseline, ThemeProvider, IconButton } from "@material-ui/core";
import theme from "../renderer/theme";

/* Component Import */
import AppSelector from './AppSelector'
import AppPanel from '../components/AppPanel';
import getAppDetailsByName from '../utils/get_app_details_by_name';

/* Utility Import */
let readAllAppDetails = require('../utils/read_all_app_details')

export default class AppContainer extends Component {

    appDetails = readAllAppDetails()

    state = {
        alerts: {},
        selectedApp: 'discord'
    }

    switchApp = (event) => {
        let appName = event.target.value
        event.currentTarget.blur()
        this.setState({
            selectedApp: appName
        })
    }

    render = () => {

        return (
            <div id="appContainer">
                <AppSelector 
                selectedApp={this.state.selectedApp} 
                handler={this.switchApp} 
                appDetails={this.appDetails}
                />
                <AppPanel selectedApp={this.state.selectedApp} />
            </div>
        )
    }
}
