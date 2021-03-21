import React, { Component } from 'react'
import CheckBox from './CheckBox.js'

 class Check extends Component {
    render() {
        return (
            <div>
             <CheckBox name="I read the terms of the app" checked={false}/>
             <CheckBox name="I accept the terms of the app" checked={false}/>
             <CheckBox name="I want to get the weekly news letter" checked={true}/>
             <CheckBox name="I want to get sales and offers" checked={true}/>
            </div>
        )
    }
}

export default Check
