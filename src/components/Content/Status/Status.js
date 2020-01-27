import React, { Component } from 'react'

class Status extends Component {
  
    state = {
        isFocus: false,
        value: this.props.status
    }


    active() {
        this.setState({
            isFocus: true
        })
    };

    unActive() {
        this.setState({
            isFocus: false
        })
        this.props.setStatus(this.state.value)
    }

    changeStatus(event){
        this.setState({
            value: event.target.value
        })
    }

    componentDidUpdate(prevProps, prevState){
       if(prevProps.status !== this.props.status){
           this.setState({
               value: this.props.status
           })
       }
    }


    render() {
        return (
            <div>
                <div>
                    {!this.state.isFocus &&
                        <span onDoubleClick={this.active.bind(this)}>{this.props.status || 'No status'}</span>
                    }
                </div>
                <div>
                    {this.state.isFocus &&
                        <input onChange={this.changeStatus.bind(this)} onBlur={this.unActive.bind(this)} autoFocus={true} value={this.state.value} />}
                </div>
            </div >
        )
    }



}

export default Status
