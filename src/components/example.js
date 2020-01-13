import React, { Component } from 'react';

function Warning(props){
    if(!props.warn){
        return null;
    }

    return (
        <div>
            <h1>Warning</h1>
        </div>
    )
}


class Example extends Component {
    constructor(props){
        super(props);

        this.state = {
            showing: true
        }

        this.click = this.click.bind(this)
    }

    click(){
        this.setState({
            showing: !this.state.showing
        })
    }

    render(){
        return (
            <div>
                <Warning warn={this.state.showing} />
                <button onClick={this.click}>{this.state.showing? 'Скрыть' : 'Показать'}</button>
            </div>
        )
    }
}



export default Example;
