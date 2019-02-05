import React, { Component } from 'react';
import Form from './Form';

class Login extends Component {
  render() {
    return  <div className="row p-3 triangle_login">
                <div className="col-md-4">
                    <div className="row row_form">
                        <div className="col-md-12 d-flex align-items-center">
                          <Form/>
                      </div>
                    </div>
                </div>
                <div className="col-md-8 text-right">
                    <img src="assets/images/Logo_Morales.png" alt=""></img>
                </div>
            </div>;
  }
}

export default Login;