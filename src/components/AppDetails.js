import React, { Component } from 'react'
let calculateAppSize = require('../utils/calculate_app_size')

export default class AppDetails extends Component {

    render() {

        calculateAppSize(this.props.appInfo)

        return (
            <div>
                
            </div>
        )
    }
}
