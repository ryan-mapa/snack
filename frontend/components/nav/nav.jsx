import React from 'react';

class Nav extends React.Component {

    handleLogout(e) {
        e.preventDefault();
        this.props.logout();
    }
    
    render() {
        const current = this.props.currentUser;
        const welcome = (current === undefined || current === "logged out") ? 
            "not logged in" : `Hi there, ${this.props.currentUser.username}`;

        const logoutButton = (this.props.currentUser === undefined) ? 
            <div>
                <button onClick={this.props.openLoginModal}>Log In</button>
                <button onClick={this.props.openSignupModal}>Sign Up</button>
            </div> : 
            <button onClick={(e) => this.handleLogout(e)} >Logout</button>;
        
        console.log(this.props.currentUser);
        
        return (
            <div className="navbar">
                <a >LOGO</a>
                <div className="right-nav">
                    {welcome}
                    {logoutButton}
                </div>
                
            </div>
        );
    }
}

export default Nav;