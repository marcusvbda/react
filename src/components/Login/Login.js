import React, { Component } from 'react';
import Form from './-Form';
import Languages from '../Language/-Languages';


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }

  render() {
    return  <div className="row p-3 triangle_login">
                <div className="col-md-5">
                    <div className="row row_form">
                        <div className="col-md-12 d-flex align-items-center">
                          <Form _app={this.props._app} />
                        </div>
                    </div>
                    <div className="row row_languages">
                        <div className="col-md-12">
                            <Languages _app={this.props._app} />
                        </div>
                    </div>
                </div>
                <div className="col-md-7 text-right">
                    <img src="assets/images/Logo_Morales.png" alt=""></img>
                </div>
            </div>;
  }
}

export default Login;