import React from 'react';

class Nav extends React.Component {

    handleLogout(e) {
        e.preventDefault();
        this.props.logout();
    }
    
    render() {
        const current = this.props.currentUser;
        const welcome = (current === undefined || current === "logged out") ? "not logged in" : this.props.currentUser.username;
        const logoutButton = (this.props.currentUser === undefined) ? 
            "" : 
            <button onClick={(e) => this.handleLogout(e)} >Logout</button>;
        
        console.log(this.props.currentUser);
    
        return (
            <div className="navbar">
                {welcome}
                {logoutButton}
            </div>
        );
    }
}

export default Nav;