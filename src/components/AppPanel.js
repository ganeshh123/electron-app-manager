import React, { Component } from 'react'
import AppDetails from './AppDetails'
let getAppDetailsByName = require('../utils/get_app_details_by_name')

export default class AppPanel extends Component {

    app = getAppDetailsByName(this.props.app)

    render() {

        let app = this.app
        console.log(app)

        return (
            <div>
                <AppDetails app={this.props.app} />
            </div>
        )
    }
}