import React, { Component } from 'react'
import classes from './Preloader.module.css'


export default class Preloader extends Component {
    render() {
        return (
            <div className={classes.preloader}>
                <div className={classes.spinner}></div>
            </div>
        )
    }
}
