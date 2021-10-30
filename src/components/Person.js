import React, { Component } from 'react'

export default class Person extends Component {
    constructor(props) {
        super(props);
        this.props = props;


        this.state = {
            name: "Bhargov",
            age: "25"
        }


    }


    nameChangeHandler() {
        // alert();
        this.setState({ name: "StrangerName", age: "StrangeAge" });
    }



    // Event handling with method
    buttonClickHandler = () => {
        // alert("Hello")
        console.log(this.state)
    }

    render() {
        return (
            <div>
                <hr />
                <h1>I am from class component(Person)</h1>
                <h3>Name:{this.state.name} </h3>
                <h3>Age:{this.state.age} </h3>
                <hr />

                <button onClick={() => this.nameChangeHandler()}>Click me!</button>


                {/* Event handling with method  */}
                <button type="button" onClick={this.buttonClickHandler}>Click</button>
            </div>
        )
    }
}
