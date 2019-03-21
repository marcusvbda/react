import React, { Component } from 'react';
import '../Style/-Custom.scss';

const style = 
{
    cursor :"pointer"
};

class NavStep1 extends Component {
  constructor(props) {
    super(props);
    this.change = this.change.bind(this);
  }
  
  change(value) {
    let object = this.props._app.get("resume");
    object.bar_step = value;
    this.props._app.set(object);
  }

  render() {
    return <div>
              <span style={style} onClick={(e) => this.change(1)} className={this.props._app.get("resume").bar_step===1 ? 'item active' : 'item'} ><b>1.</b>Basic Information</span>
              <span className="separator">/</span>
              <span style={style} onClick={(e) => this.change(2)} className={this.props._app.get("resume").bar_step===2 ? 'item active' : 'item'}><b>2.</b>Emergency Information & Preferred shift to work</span>
              <span className="separator">/</span>
              <span style={style} onClick={(e) => this.change(3)} className={this.props._app.get("resume").bar_step===3 ? 'item active' : 'item'}><b>3.</b>Equal Opportunity Employer</span>
              <span className="separator">/</span>
              <span style={style} onClick={(e) => this.change(4)} className={this.props._app.get("resume").bar_step===4 ? 'item active' : 'item'}><b>4.</b>Resume</span>
          </div>;
  }
}

export default NavStep1;

