import React, { Component } from 'react';
import Form from './-Form';
import Languages from '../Default/-Languages';

class Login extends Component {
  render() {
    return  <div className="row p-3 triangle_login">
                <div className="col-md-5">
                    <div className="row row_form">
                        <div className="col-md-12 d-flex align-items-center">
                          <Form/>
                        </div>
                    </div>
                    <div className="row row_languages">
                        <div className="col-md-12">
                            <Languages/>
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