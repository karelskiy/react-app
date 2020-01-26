import React, { Component } from 'react'

export default class Status extends Component {

    state = {
        isActive: false,
        value: 'hello'
    }

    active() {
        this.setState({
            isActive: true
        })
    }

    unActive() {
        this.setState({
            isActive: false
        })
    }

    updateValue(e) {
        this.setState({
            value: e.target.value
        })
    }

    render() {
        return (
            <div>
                <div>
                    {!this.state.isActive &&
                        <span onDoubleClick={this.active.bind(this)}>{this.state.value}</span>
                    }
                </div>
                <div>
                    {this.state.isActive && <input onChange={this.updateValue.bind(this)} onBlur={this.unActive.bind(this)} autoFocus={true} value={this.state.value} />}
                </div>
            </div>
        )
    }
}
