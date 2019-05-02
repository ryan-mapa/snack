import React from 'react';

class SignupComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: ""
    };

    this.firstInput = React.createRef();

    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateInputs = this.updateInputs.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleKeyPress(e) {
    if (e.keyCode == "27") this.props.closeModal();
  }

  componentDidMount() {
    this.firstInput.current.focus();
    document.addEventListener("keydown", this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress);
  }

  updateInputs(e, field) {
    this.setState({[field]: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.clearSessionErrors();

    if (this.props.type === "signup") {
      this.props.signup(this.state).then(() => this.props.closeModal());
    } else {
      this.props.login(this.state).then(() => this.props.closeModal());
    }
  }

  render() {
    const header = this.props.type === "signup" ? "Sign Up" : "Log In";
    const submit = this.props.type === "signup" ?
        <input type="submit" onClick={this.handleSubmit} value="Sign me up!" /> :
        <input type="submit" onClick={this.handleSubmit} value="Log In" />
    const emailField = this.props.type === "signup" ?
      (<>
        <label>Email:
            <input type="email" onChange={(e) => this.updateInputs(e, "email")} value={this.state.email} />
        </label>
        <br />
      </>) : "";

    const errors = this.props.errors.map((err, i) => <li className="error-msg" key={i}>{err}</li>);

    return (
      <form> 
        <h2>{header}</h2>

        <ul>{errors}</ul>

        <label >Username: 
          <input 
            type="text" 
            ref={this.firstInput}
            onChange={(e) => this.updateInputs(e, "username")} 
            value={this.state.username}/> 
        </label>
        <br/>
        {emailField}
        <label>Password: 
          <input type="password" onChange={(e) => this.updateInputs(e, "password")} value={this.state.password}/>
        </label>  
        <br/>
        {submit}
      </form>
    )
  }

}

export default SignupComponent;
