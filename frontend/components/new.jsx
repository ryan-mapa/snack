import React from 'react';

class Component extends React.Component {
    constructor(props) {
        super(props)

    }

    render() {
        if (this.props.stuff === undefined) {
            return (
                <div>empty div</div>
            )
        } else {
            return (
                <div>{`passed in as stuff ${this.props.stuff}`}</div>
            )
        }
    }
}

export default Component;