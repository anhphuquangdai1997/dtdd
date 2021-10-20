import React, { Component } from "react";

export class Colors extends Component {
    render() {
        const { color } = this.props;
        return ( <
            div className = "Colors" > {
                color.map((colo, index) => ( <
                    button key = { index }
                    style = {
                        { background: colo } } > < /button>
                ))
            } <
            /div>
        );
    }
}

export default Colors;