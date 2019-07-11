import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { openLoginModal } from '../actions/ui_actions';
import { connect } from 'react-redux';


const AuthenticatedRoute = ({component: Component, loggedIn, openLoggy, path, exact}) => {
    if (!loggedIn) {
        openLoggy();
    }
    return <Route path={path} exact={exact} render={(props) => {
        return (loggedIn ? <Component {...props}/> : <div>you not logged in!</div>)
    }}/>
}

const Protected = ({ component: Component, path, loggedIn, exact }) => (
    <Route path={path} exact={exact} render={(props) => (
        loggedIn ? (
            <Component {...props} />
        ) : (
                <Redirect to="/" />
            )
    )} />
);


const msp = state => ({
    loggedIn: !!(state.session.currentUser)
});

const mdp = dispatch => ({
    openLoggy: () => dispatch(openLoginModal())
})

export const AuthRoute = connect(msp, mdp)(Protected);