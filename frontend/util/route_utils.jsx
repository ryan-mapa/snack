import React from 'react';
import { Redirect } from 'react-router-dom';
import { openLoginModal } from '../actions/ui_actions';
import { connect } from 'react-redux';


const AuthenticatedRoute = ({component, loggedIn}) => {
    // debugger
    return loggedIn ? <div>cheese</div> : <div>cake</div>
}


const msp = state => ({
    loggedIn: !!(state.session.currentUser)
});

export const AuthRoute = connect(msp, null)(AuthenticatedRoute);