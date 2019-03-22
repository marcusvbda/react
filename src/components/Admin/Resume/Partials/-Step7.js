import React, { Component } from 'react';
import Template from '../../Default/Template';
// import Select from '../../Default/-Select';
import '../Style/-Custom.scss';


class Step7 extends Component {
  constructor(props) {
    super(props);
    this.continue = this.continue.bind(this);
  }
  
  continue() {
    alert("FIMM");
  }
  
  render() {
    return <div>
      <Template _app={this.props._app}>


        <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-black-800"><b>Skills</b></h1>
        </div>

        <div className="row text-right mr-0 mt-3 resume_continue">
          <span className="col-md-10"></span>
          <button className="col-md-2 btn_continue text-center" onClick={(e) => this.continue()}>Continue</button>
        </div>

      </Template>
    </div>;
  }
}

export default Step7;