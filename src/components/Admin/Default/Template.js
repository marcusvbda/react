import React, { Component } from 'react';
import './Style/-Theme.scss';
import './Style/-Custom.scss';

class Template extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return <div>
            <div id="wrapper">
                <ul className="navbar-nav sidebar sidebar-dark accordion" id="accordionSidebar"></ul>
                <div id="content-wrapper" className="d-flex flex-column">
                    <div id="content">
                        <nav className="navbar navbar-expand navbar-light bg-white-custom topbar mb-4 static-top shadow">
                        
                        </nav>
                        <div className="container-fluid">
                            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                                <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
                            </div>
                            <div className="row">
                                    <div className="col-12">
                                {this.props.children}
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>;
    }
}

export default Template;