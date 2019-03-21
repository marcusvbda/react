import React, { Component } from 'react';
// import Input from '../../../Default/-Input';
// import Select from '../../../Default/-Select';
import '../../Style/-Custom.scss';


class BarStep4 extends Component {
    constructor(props) {
      super(props);
      this.state = {};
      this.continue = this.continue.bind(this);
    }
    
    continue() {
      let object = this.props._app.get("resume");
      object.step = 2;
      object.bar_step = 1;
      this.props._app.set(object);
    }
  

  render() {
    return <div>
        <div className="d-sm-flex align-items-center justify-content-between mb-3">
          <h1 className="h3 mb-0 text-black-800"><b>Resume</b></h1>
        </div>


        <div className="row text-right mr-0 mt-2 resume_continue">
          <span className="col-md-10"></span>
          <button className="col-md-2 btn_continue text-center" onClick={(e) => this.continue()}>Continue</button>
        </div>
    </div>;
  }
}

export default BarStep4;

