import React, { Component } from 'react';
import Translate from '../../Language/-Translate';
import  './Style/-Custom.scss';

class Welcome extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
        this.props._app.set({loading:false});
    }

  render() {
    return  <div className="welcome_row">
              <div className="row d-flex align-items-center">
                  <div className="col-12">
                    <div className="row pt-4">
                      <div className="col-12 text-center title">
                        <span className="p-0 row title_welcome"><h1 className="col-12"><Translate _app={this.props._app}>welcome.welcome_to</Translate></h1></span>
                        <span className="p-0 row title_company"><h1 className="col-12"><b className="mr-4">MORALES</b><small>GROUP</small></h1></span>
                        <span className="pt-2 row title_description"><h4 className="col-12">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h4></span>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 text-center title">
                        <button className="btn_continue"><Translate _app={this.props._app}>welcome.continue</Translate></button>
                      </div>
                    </div>
                  </div>
              </div>
            </div>;
  }
}

export default Welcome;