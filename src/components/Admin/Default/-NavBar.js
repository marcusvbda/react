import React, { Component } from 'react';
import Translate from '../../Language/-Translate';

class NavBar extends Component {

    render() {
        return  <div>
                    <nav className="navbar pr-0 mt-0 navbar-expand navbar-light bg-white-custom topbar mb-4 static-top shadow">
                        <div className="nav_items d-flex align-items-center">
                            <a href="/" className="item active"><b>1.</b><Translate _app={this.props._app}>navbar.base_information</Translate></a>
                            <span className="separator">/</span>
                            <a href="/"  className="item"><b>2.</b><Translate _app={this.props._app}>navbar.pre_screening</Translate></a>
                            <span className="separator">/</span>
                            <a href="/" className="item"><b>3.</b><Translate _app={this.props._app}>navbar.pre_employment</Translate></a>
                            <span className="separator">/</span>
                            <a href="/" className="item"><b>4.</b><Translate _app={this.props._app}>EEO</Translate></a>
                            <span className="separator">/</span>
                            <a href="/" className="item"><b>5.</b><Translate _app={this.props._app}>navbar.contact_information</Translate></a>
                            <span className="separator">/</span>
                            <a href="/" className="item"><b>6.</b><Translate _app={this.props._app}>navbar.resume</Translate></a>
                            <span className="separator">/</span>
                            <a  href="/" className="item"><b>7.</b><Translate _app={this.props._app}>navbar.skills</Translate></a>
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