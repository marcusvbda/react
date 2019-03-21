import React, { Component } from 'react';
import Input from '../../../Default/-Input';
import '../../Style/-Custom.scss';
import Select from '../../../Default/-Select';


class BarStep2 extends Component {
    constructor(props) {
      super(props);
      this.state = {};
      this.continue = this.continue.bind(this);
    }
    
    continue(value) {
      let object = this.props._app.get("resume");
      object.bar_step = value;
      this.props._app.set(object);
    }
  

  render() {
    return <div>
        <div className="d-sm-flex align-items-center justify-content-between mb-3">
          <h1 className="h3 mb-0 text-black-800"><b>Emergency Information</b></h1>
        </div>

        <div className="row">
          <div className="col-md-6">
            <Input placeholder={"Emergency Contact Name**"} name="contact_name" required />
          </div>
          <div className="col-md-6">
            <Input placeholder={"Emergency Contact Phone*"} name="contact_phone" required />
          </div>
        </div>

        <div className="d-sm-flex align-items-center justify-content-between mb-3 mt-4">
          <h1 className="h3 mb-0 text-black-800"><b>Preferred shift to work</b></h1>
        </div>

        <div className="row">
          <div className="col-md-2">
            <Select >
                <option>First Shift</option>
            </Select>
          </div>
        </div>

        <div className="row text-right mr-0 mt-2 resume_continue">
          <span className="col-md-10"></span>
          <button className="col-md-2 btn_continue text-center" onClick={(e) => this.continue(3)}>Continue</button>
        </div>
    </div>;
  }
}

export default BarStep2;

