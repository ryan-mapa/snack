import React from 'react';

class SignupComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.updateInputs = this.updateInputs.bind(this);
  }

  updateInputs(e, field) {
    this.setState({[field]: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.signup(this.state);
  }

  render() {
    return (
      <form> 
        <label >Username: 
          <input type="text" onChange={(e) => this.updateInputs(e, "username")} value={this.state.username}/> 
        </label>
        <br/>
        <label>Email: 
          <input type="email" onChange={(e) => this.updateInputs(e, "email")} value={this.state.email}/>
        </label>
        <br/>
        <label>Password: 
          <input type="password" onChange={(e) => this.updateInputs(e, "password")} value={this.state.password}/>
        </label>  
        <br/>
        <input type="submit" onClick={this.handleSubmit} value="Sign me up!"/>
      </form>
    )
  }

}

export default SignupComponent;
