import React, { Component } from 'react';
import '../Style/-Custom.scss';

const style = 
{
    cursor :"pointer"
};

class NavStep4 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  

  render() {
    return <div>
              <span style={style}  className={this.props._app.get("resume").bar_step===1 ? 'item active' : 'item'} ><b>1.</b>Basic Information</span>
              <span className="separator">/</span>
          </div>;
  }
}

export default NavStep4;

