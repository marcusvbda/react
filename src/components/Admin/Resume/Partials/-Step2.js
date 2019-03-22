import React, { Component } from 'react';
import Template from '../../Default/Template';
import Select from '../../Default/-Select';
import '../Style/-Custom.scss';


class Step1 extends Component {
  constructor(props) {
    super(props);
    this.continue = this.continue.bind(this);
  }
  
  continue() {
    let object = this.props._app.get("resume");
    object.step = 3;
    this.props._app.set(object);
  }
  render() {
    return <div>
      <Template _app={this.props._app}>


        <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-black-800"><b>Pre screening</b></h1>
        </div>

        <div className="row mb-0">
          <div className="col-12">
            <h6>1. Are you able to provide information that establishes your identity and eligibility to work in the US?</h6>
            <small className="small">Have you been convicted of or pled guilty or no contest to a felony or misdemeanor other than a minor traffic-related infraction? Do not answer “yes” if your conviction record has been expunged, sealed, or is otherwise protected from disclosure by law.</small>
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-md-1">
            <Select >
                <option>No</option>
                <option>Yes</option>
            </Select>
          </div>
        </div>
        <div className="row mb-0 mt-4">
          <div className="col-12">
            <h6>2. Are you at least 18 years of age or older?</h6>
            <small className="small">Have you been convicted of or pled guilty or no contest to a felony or misdemeanor other than a minor traffic-related infraction? Do not answer “yes” if your conviction record has been expunged, sealed, or is otherwise protected from disclosure by law.</small>
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-md-1">
            <Select >
                <option>No</option>
                <option>Yes</option>
            </Select>
          </div>
        </div>
        <div className="row text-right mr-0 mt-3 resume_continue">
          <span className="col-md-10"></span>
          <button className="col-md-2 btn_continue text-center" onClick={(e) => this.continue()}>Continue</button>
        </div>

      </Template>
    </div>;
  }
}

export default Step1;