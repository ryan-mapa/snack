import React from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { searchUsers } from '../../util/search_api_util';

class UserSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            query: "",
            userList: []
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onChange(e) {
        e.preventDefault();
        this.setState({query: e.target.value}, () => 
            this.props.search(this.state.query, this.props.workspaceId)
                .then((results) => this.setState({userList: results }))
        )
    }

    throttledSearch() {
        let ready = false;

        
        this.props.search(this.state.query, this.props.workspaceId)
            .then((results) => this.setState({ userList: results }))
    }

    handleSubmit(e) {

    }

    render() {
        console.log(this.state.userList)
        
        let list = this.state.userList.map((user) => {
            return (
                <div key={user.id} >{user.username}</div>
            )
        })

        return (<div>
            <h2>Add users to Channel</h2>
            <form onSubmit={this.handleSubmit}>
                <label>Search users: <br/>
                    <input type="text" onChange={this.onChange} value={this.state.query} />
                </label><br/>
            </form>
            <ul>
                {list}
            </ul>
        </div>)
    }
}

const msp = (state, ownProps) => ({
    workspaceId: parseInt(ownProps.location.pathname.slice(12))
});

const mdp = (dispatch) => ({
    search: (query, id) => searchUsers(query, id)
});

export default withRouter(connect(msp, mdp)(UserSearch));