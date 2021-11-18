import React, { Component } from "react";

export class ButtonBtnClass extends Component {

    state = { count: 0 };


    handleBtnClick() {
        this.setState({count: this.state.count + 1});
        console.log(this.state.count)
    }
    render() {
        return (
            <div>
                <button onClick={() => this.handleBtnClick()}>
                    {this.props.name}
                </button>
                <h1>{this.state.count}</h1>
            </div>
        );
    }
}
export default ButtonBtnClass;