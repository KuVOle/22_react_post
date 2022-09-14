import React from "react";


class ClassCounter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
        this.increment = this.increment.bind(this);
        this.decriment = this.decriment.bind(this);

    }
    decriment() {
        this.setState({ count: this.state.count + 1 })
    }
    increment() {
        this.setState({ count: this.state.count - 1 })
    }

    render() {
        return (<div>
            <h1>{this.state.count}</h1>
            <button onClick={this.decriment}>decriment</button>
            <button onClick={this.increment}>increment</button>
        </div>)
    }
}

export default ClassCounter;