import React from 'react';

class widgetControls extends React.Component {

    render() {
        return <div>controls</div>
    }
}

const msp = state => ({});

const mdp = dispatch => ({});

export default connect(msp, mdp)(widgetControls);