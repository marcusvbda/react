import React, { Component } from 'react';
import NavStep1 from './NavStep/-NavStep1';
import NavStep2 from './NavStep/-NavStep2';
import NavStep3 from './NavStep/-NavStep3';
import NavStep4 from './NavStep/-NavStep4';
import NavStep5 from './NavStep/-NavStep5';
import NavStep6 from './NavStep/-NavStep6';
import NavStep7 from './NavStep/-NavStep7';


class NavBar extends Component {
    constructor(props) {
      super(props);
      this.change = this.change.bind(this);
    }
    
    change(value) {
      this.props._app.set({ resume : {step : 1 ,bar_step : value} });
    }
    
    getBar() {
        switch(this.props._app.get("resume").step) {
            case 1:
              return <NavStep1  _app={this.props._app}/>;
            case 2:
              return <NavStep2  _app={this.props._app}/>;
            case 3:
              return <NavStep3  _app={this.props._app}/>;
            case 4:
              return <NavStep4  _app={this.props._app}/>;
            case 5:
              return <NavStep5  _app={this.props._app}/>;
            case 6:
              return <NavStep6  _app={this.props._app}/>;
            case 7:
              return <NavStep7  _app={this.props._app}/>;
            default:
              return null;
          }
    }

    render() {
        return  <div>
                    <nav className="navbar pr-0 mt-0 navbar-expand navbar-light bg-white-custom topbar mb-4 static-top shadow">
                        <div className="nav_items d-flex align-items-center">
                            {this.getBar()}
                        </div>
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <span className="mr-2 d-none nav-drop-text d-lg-inline text-gray-600 small pr-2">Andrew Morethson</span>
                                    <i className="material-icons arrow-custom">arrow_drop_down</i>
                                    <img className="img-profile rounded-circle" src="/assets/images/user@2x.png" alt="user"/>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>;
    }
}

export default NavBar;