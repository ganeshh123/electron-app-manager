import React, { Component } from 'react'
import AppDetails from './AppDetails'
let getAppDetailsByName = require('../utils/get_app_details_by_name')

export default class AppPanel extends Component {

    render() {

        let appInfo = getAppDetailsByName(this.props.selectedApp)
        console.log(appInfo)

        return (
            <div>
                <AppDetails appInfo={appInfo} />
            </div>
        )
    }
}