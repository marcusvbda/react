import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return  <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="mainNav">
                    <div className="container">
                        <Link className="navbar-brand js-scroll-trigger"  to="/">Start Bootstrap</Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarResponsive">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <Link className="nav-link js-scroll-trigger"  to="/">Inicio</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link js-scroll-trigger"  to="/sobre">Sobre</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>;
  }
}

export default Navbar;