import React from 'react';
import {connect} from 'react-redux';

const ChannelIndex = props => {
    return(
        <div>
            indexo
        </div>
    )
} 


const msp = state => ({
    channels: state.entities.channels
})

const mdp = dispatch => ({

})

export default connect(msp, mdp)(ChannelIndex);