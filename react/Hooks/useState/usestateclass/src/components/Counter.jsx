import { Component } from "react";

class Counter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }

    incerementCount = () => {
        this.setState((prevState) => ({
            count: prevState.count + 1
        }))
    }

    render() {
        return (

            <>
                <p>count is {this.state.count}</p>
                <button onClick={this.incerementCount}>Click</button>
            </>
        )
    }
}

export default Counter