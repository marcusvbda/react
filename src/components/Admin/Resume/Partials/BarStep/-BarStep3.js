import React, { Component } from 'react';
import Select from '../../../Default/-Select';
import '../../Style/-Custom.scss';


class BarStep3 extends Component {
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
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-black-800"><b>Equal Opportunity Employer</b></h1>
        </div>

        <div className="row mb-0">
          <div className="col-12">
            <h6>1. Are you able to provide information that establishes your identity and eligibility to work in the US?</h6>
            <small className="small">This company is an equal opportunity employer and affords equal opportunity to all applicants for all positions without regards to race, color, religion, gender, national origin, age, disability, veteran status, sexual orientation, gender identity, or any other status protected under local, state or federal laws. Morales Enterprises Group of Companies., is subject to certain governmental recordkeeping and reporting requirements for the administration of civil rights laws and regulations. In order to comply with these laws, Morales Enterprises INC , invites you to voluntarily self-identify your race and ethnicity. Submission of this information is voluntary and refusal to provide it will not subject you to any adverse treatment. The information will be kept confidential and will only be used in accordance with the provisions of applicable laws, executive orders, and regulations. Including those that require the information to be summarized and reported to the federal government for civil rights enforcement. When reported, data will not identify any specific individual.</small>
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-md-6">
            <Select >
                <option>Gender</option>
            </Select>
          </div>
          <div className="col-md-6">
            <Select >
                <option>Race</option>
            </Select>
          </div>
        </div>
        <div className="row mb-0 mt-3">
          <div className="col-12">
            <h6>Disabilit</h6>
            <small className="small">A disability is any impairment, which substantially limits one or more life activities. A disabled person is one who (i) actually has such an impairment; (ii) has a record of such an impairment, or (iii) is regarded as having such an impairment. You may identify yourself as a person with a disability at any time during your employment. Disclosure is voluntary.</small>
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-md-6">
            <Select >
                <option>Disabilit</option>
            </Select>
          </div>
        </div>
        <div className="row mb-0 mt-3">
          <div className="col-6">
            <h6>Veteran Status</h6>
            <Select >
                <option>Veteran Status</option>
            </Select>
          </div>
        </div>
        <div className="row text-right mr-0 mt-3 resume_continue">
          <span className="col-md-10"></span>
          <button className="col-md-2 btn_continue text-center" onClick={(e) => this.continue(4)}>Continue</button>
        </div>
    </div>;
  }
}

export default BarStep3;

