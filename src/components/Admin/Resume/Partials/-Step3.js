import React, { Component } from 'react';
import Template from '../../Default/Template';
import Select from '../../Default/-Select';
import TextArea from '../../Default/-TextArea';
import '../Style/-Custom.scss';


class Step3 extends Component {
  constructor(props) {
    super(props);
    this.continue = this.continue.bind(this);
  }
  
  continue() {
    let object = this.props._app.get("resume");
    object.step = 4;
    this.props._app.set(object);
  }

  render() {
    return <div>
      <Template _app={this.props._app}>


        <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-black-800"><b>Pre-Employment Application</b></h1>
        </div>

        <div className="row mb-0">
          <div className="col-12">
            <small className="small">Please carefully read the information below and answer the questions. A conviction, plea, or pending charges will not necessarily disqualify you from consideration for employment. The effect of a conviction, plea, or pending charges will be assessed with respect to time, circumstances, seriousness of the offense, and job responsibilities and duties. However, your failure to disclose a conviction, plea or pending charge (except convictions, pleas, or pending charges protected from disclosure by state or local law) will disqualify you from consideration for employment or will result in termination of employment if subsequently discovered.</small>
          </div>
        </div>

        <div className="row mb-0 mt-4">
          <div className="col-12">
            <h6>1. Questions Requiring Disclosure of Prior Felonies or Misdemeanors</h6>
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
            <h6>If Yes</h6>
            <small className="small">Have you been convicted of or pled guilty or no contest to a felony or misdemeanor other than a minor traffic-related infraction? Do not answer “yes” if your conviction record has been expunged, sealed, or is otherwise protected from disclosure by law.</small>
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-md-1">
            <Select >
                <option>Other</option>
            </Select>
          </div>
          <div className="col-md-2">
            <Select >
                <option>MM/YYYY</option>
            </Select>
          </div>
        </div>

        <div className="row mt-2">
          <div className="col-md-12">
            <TextArea ></TextArea>
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

export default Step3;