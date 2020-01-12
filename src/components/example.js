import React, { Component } from 'react';


class Example extends Component {
    
    state = {
        date: new Date()
    };

    tick = () => {
        this.setState({
            date: new Date()
        })
    }

    componentDidMount(){
        this.timer = setInterval( ()=>{
            this.tick();
        }, 1000);
    }

    componentWillMount(){
        clearInterval(this.timer);
    }

    

    render() {
        return (
            <div>
                <p>{this.state.date.toLocaleTimeString()}</p>
            </div>
        )
    }

   
}



export default Example;
