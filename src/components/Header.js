import React, { Component } from 'react';
const componentStyle = {
    paddingTop: '156px',
    paddingBottom: '100px'
};
class Header extends Component {
  render() {
    return  <div>
                <header  style={componentStyle} className="bg-primary text-white">
                    <div className="container text-center">
                    <h1>Welcome to Scrolling Nav</h1>
                    <p className="lead">A landing page template freshly redesigned for Bootstrap 4</p>
                    </div>
                </header>
            </div>;
  }
}

export default Header;