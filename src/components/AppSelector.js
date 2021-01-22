import React, { Component } from 'react'
import { CssBaseline, ThemeProvider, IconButton } from "@material-ui/core";
import theme from "../renderer/theme";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

export default class AppSelector extends Component {

    handleChange = () => {
        
    }

    render = () => {

        return (
            <FormControl >
            <InputLabel>App</InputLabel>
            <Select
              value={this.props.selectedApp}
              onChange={this.props.handler}
            >
                {this.props.appDetails.map( (appDetail) => {
                    return (<MenuItem 
                        value={appDetail['name']}
                    >
                        {appDetail['fullName']}
                    </MenuItem>)
                })}
            </Select>
            <FormHelperText>Select an App to view and manage.</FormHelperText>
          </FormControl>    
        )
    }
}
