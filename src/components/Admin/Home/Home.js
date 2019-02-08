import React, { Component } from 'react';
import Translate from '../../Language/-Translate';
import { Link } from "react-router-dom";
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }

  render() {
    return  <div>
                <h1><Translate _app={this.props._app}>debug.home</Translate></h1>
                <p><Link to="/welcome">Welcome</Link></p>
            </div>;
  }
}

export default Login;