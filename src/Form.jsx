import React, { Component } from 'react'


class Form extends Component{

    state = {
        firstName: '',
        lastName: '',
        age: '',
        gender: '',
        destination: '',
        dietaryRestrictions: {
            isVegan: false,
            isKosher: false,
            isLactoseFree: false
        }
    }

    handleChange = event => {
        const { dietaryRestrictions } = this.state
        const { name, value, type, checked } = event.target
        type === 'checkbox' ? this.setState({
            ...this.state,
            dietaryRestrictions: {
                ...dietaryRestrictions,
                [name]: checked
            }
        }) : this.setState({[name]: value})
    }

    render(){
        const { firstName, lastName, age, gender, destination, dietaryRestrictions } = this.state
        return (
            <form>
                <input 
                    value={firstName} 
                    name='firstName' 
                    placeholder='First Name' 
                    onChange={this.handleChange} 
                /> <br/><br/>
                <input 
                    value={lastName} 
                    name='lastName' 
                    placeholder='Last Name' 
                    onChange={this.handleChange} 
                /> 
                <br/><br/>
                <input 
                    type="number" 
                    value={age} 
                    min='0'
                    name='age' 
                    placeholder='Age' 
                    onChange={this.handleChange} 
                /> 
                <br/>

                {/* Radio  */}
                <br/>
                <label>Choose your gender:</label>
                <div>
                    <label>
                        <input 
                            type='radio'
                            value='male' 
                            name='gender' 
                            checked={gender === 'male'}
                            onChange={this.handleChange} 
                        /> Male
                    </label>
                    <label>
                        <input 
                            type='radio'
                            value='female' 
                            name='gender' 
                            checked={gender === 'female'}
                            onChange={this.handleChange} 
                        /> Female
                    </label>
                </div>
                
                {/* Destination */}
                <label>Choose your destination:</label>
                <select name="destination" value={destination} onChange={this.handleChange} >
                    <option value="">-- Please seleact a destination --</option>
                    <option value="norway">Norway</option>
                    <option value="spain">Spain</option>
                    <option value="portugal">Portugal</option>
                    <option value="poland">Poland</option>
                    <option value="ukraine">Ukraine</option>
                </select>

                {/* Dietary restrictions */}
                <label>
                    <input 
                        type="checkbox"
                        name='isVegan'
                        checked={dietaryRestrictions.isVegan}
                        onChange={this.handleChange} 
                    /> Vagan?
                </label>
                <label>
                    <input 
                        type="checkbox"
                        name='isKosher'
                        checked={dietaryRestrictions.isKosher}
                        onChange={this.handleChange} 
                    /> Kosher?
                </label>
                <label>
                    <input 
                        type="checkbox"
                        name='isLactoseFree'
                        checked={dietaryRestrictions.isLactoseFree}
                        onChange={this.handleChange} 
                    /> Lactose free?
                </label>
            </form>
        )
    }
}

export default Form
