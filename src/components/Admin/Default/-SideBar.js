import React, { Component } from 'react';

const style = {
    cursor : "pointer"
};

class SideBar extends Component {
    
    constructor(props) {
      super(props);
      this.state = {};
      this.change = this.change.bind(this);
    }
    
    change(value) {
      let object = this.props._app.get("resume");
      object.step = value;
      this.props._app.set(object);
    }

    render() {
        return <div>
                <ul className="navbar-nav sidebar sidebar-dark accordion" id="accordionSidebar">
                    <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
                        <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
                            <img className="logoMenu" src="/assets/images/Morales-WhiteLogo@2x.png" alt="home"/>
                        </a>
                        <li className={this.props._app.get("resume").step===1 ? 'nav-item active' : 'nav-item'}>
                            <span style={style} onClick={(e) => this.change(1)} className="nav-link">
                                <span>Basic Information</span>
                            </span>
                        </li>
                        <li className={this.props._app.get("resume").step===2 ? 'nav-item active' : 'nav-item'}>
                            <span style={style} onClick={(e) => this.change(2)} className="nav-link">
                                <span>PreScreening</span>
                            </span>
                        </li>
                        <li className={this.props._app.get("resume").step===3 ? 'nav-item active' : 'nav-item'}>
                            <span style={style} onClick={(e) => this.change(3)} className="nav-link">
                                <span>Pre Employment</span>
                            </span>
                        </li>
                        <li className={this.props._app.get("resume").step===4 ? 'nav-item active' : 'nav-item'}>
                            <span style={style} onClick={(e) => this.change(4)} className="nav-link">
                                <span>EEO</span>
                            </span>
                        </li>
                        <li className={this.props._app.get("resume").step===5 ? 'nav-item active' : 'nav-item'}>
                            <span style={style} onClick={(e) => this.change(5)} className="nav-link">
                                <span>Contact Information</span>
                            </span>
                        </li>
                        <li className={this.props._app.get("resume").step===6 ? 'nav-item active' : 'nav-item'}>
                            <span style={style} onClick={(e) => this.change(6)} className="nav-link">
                                <span>Resume</span>
                            </span>
                        </li>
                        <li className={this.props._app.get("resume").step===7 ? 'nav-item active' : 'nav-item'}>
                            <span style={style} onClick={(e) => this.change(7)} className="nav-link">
                                <span>Skills</span>
                            </span>
                        </li>
                    </ul>
                </ul>
        </div>;
    }
}

export default SideBar;