import React, { Component } from 'react';
import  './Style/-Custom.scss';
import { Redirect } from 'react-router';

class Welcome extends Component {
    constructor(props) {
        super(props);
        this.state = { continue : false };
        this.props._app.set({loading:false});
        this.continue = this.continue.bind(this);
    }
    continue()
    {
      this.setState({continue:true});
    }
  render() {
    return  (this.state.continue) ? <Redirect to="/resume/create" />:
            <div className="welcome_row">
            
              <div className="row d-flex align-items-center">
                  <div className="col-12">
                    <div className="row pt-4">
                      <div className="col-12 text-center _title">
                        <span className="p-0 row title_welcome"><h1 className="col-12">Welcome to</h1></span>
                        <span className="p-0 row title_company"><h1 className="col-12"><b className="mr-4">MORALES</b><small>GROUP</small></h1></span>
                        <span className="pt-2 row title_description"><h4 className="col-12">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h4></span>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-12 text-center _title">
                        <button onClick={this.continue} className="btn_continue">Continue</button>
                      </div>
                    </div>
                  </div>
              </div>
            </div>;
  }
}

export default Welcome;