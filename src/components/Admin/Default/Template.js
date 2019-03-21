import React, { Component } from 'react';
import './Style/-Theme.scss';
import './Style/-Custom.scss';
import SideBar from './-SideBar';
import NavBar from './-NavBar';


class Template extends Component {

    render() {
        return <div>
            <div id="wrapper">
                <SideBar _app={this.props._app} />
                <div id="content-wrapper" className="d-flex flex-column">
                    <div id="content">
                        <NavBar _app={this.props._app}/>
                        <div className="container-fluid">
                            {this.props.children}
                        </div>
                    </div>
                </div>
            </div>
        </div>;
    }
}

export default Template;