import React, { Component } from 'react';
import Translate from '../../Language/-Translate';

class SideBar extends Component {

    render() {
        return <div>
                <ul className="navbar-nav sidebar sidebar-dark accordion" id="accordionSidebar">
                    <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

                        <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
                            <img className="logoMenu" src="/assets/images/Morales-WhiteLogo@2x.png" alt="home"/>
                        </a>
                        <li className="nav-item active">
                            <a className="nav-link" href="/">
                            <span><Translate _app={this.props._app}>sidebar.base_information</Translate></span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">
                            <span><Translate _app={this.props._app}>sidebar.pre_screening</Translate></span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">
                            <span><Translate _app={this.props._app}>sidebar.pre_employment</Translate></span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">
                            <span><Translate _app={this.props._app}>EEO</Translate></span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">
                            <span><Translate _app={this.props._app}>sidebar.contact_information</Translate></span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">
                            <span><Translate _app={this.props._app}>sidebar.resume</Translate></span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">
                            <span><Translate _app={this.props._app}>sidebar.skills</Translate></span></a>
                        </li>
                    </ul>
                </ul>
        </div>;
    }
}

export default SideBar;