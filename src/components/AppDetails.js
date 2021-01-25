import React, { Component } from 'react'
let calculateAppSizes = require('../utils/calculate_app_sizes')
let convertUnits = require('../utils/convert_units')

export default class AppDetails extends Component {

    render() {

        let appSizes = calculateAppSizes(this.props.appInfo)
        Object.keys(appSizes).forEach((sizeType) => {
            appSizes[sizeType] = convertUnits( appSizes[sizeType],  'b', 'mb', 2) + 'mb'
        })

        console.log(appSizes)

        return (
            <div>
                
            </div>
        )
    }
}
