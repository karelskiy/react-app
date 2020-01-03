import React, { Component } from 'react';


class Example extends Component {
    constructor(props){
        super(props);
        this.state = {
            currentTime: (new Date()).toLocaleString()
        }
        this.launchClock();
    }
    launchClock(){
        setInterval(()=>{
            this.setState({
                currentTime: (new Date()).toLocaleString()
            })
        }, 1000)
    }
    

    render() {
        return (
            <div>
                <p>{this.state.currentTime}</p>
            </div>
        )
    }

   
}



export default Example;
