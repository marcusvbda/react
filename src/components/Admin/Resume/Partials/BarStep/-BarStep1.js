import React, { Component } from 'react';
import Input from '../../../Default/-Input';
import '../../Style/-Custom.scss';


class BarStep1 extends Component {
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
          <h1 className="h3 mb-0 text-black-800"><b>Basic information</b></h1>
        </div>

        <div className="row mb-0">
          <div className="col-12">
            <h5>Identity</h5>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <Input placeholder={"First Name*"} name="first_name" required />
          </div>
          <div className="col-md-4">
            <Input placeholder={"Middle"} name="middle_name" />
          </div>
          <div className="col-md-4">
            <Input placeholder={"Last Name*"}name="last_name" required />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <Input placeholder={"Maiden Name"} name="maiden_name" />
          </div>
          <div className="col-md-6">
            <Input placeholder="Social Security*" name="social_security" required />
          </div>
        </div>

        <div className="row mt-3  mb-0">
          <div className="col-12">
            <h5>Contact Information</h5>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <Input placeholder="Email" name="email" type="email" />
          </div>
          <div className="col-md-6">
            <Input placeholder={"Primary Phone*"} name="primary_phone" required />
          </div>
        </div>

        <div className="row mt-3  mb-0">
          <div className="col-12">
            <h5>Address</h5>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <Input placeholder={"Address"} name="address" />
          </div>
          <div className="col-md-6">
            <Input placeholder={"Address 2"} name="address_2" />
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
            <Input placeholder={"City*"} name="city" required />
          </div>
          <div className="col-md-3">
            <Input placeholder={"State*"}  name="state" required />
          </div>
          <div className="col-md-3">
            <Input placeholder={"Zip*"}  name="zip" required />
          </div>
          <div className="col-md-3">
            <Input placeholder={"Country*"}  name="country" required />
          </div>
        </div>

        <div className="row text-right mr-0 mt-2 resume_continue">
          <span className="col-md-10"></span>
          <button className="col-md-2 btn_continue text-center" onClick={(e) => this.continue(2)}>Continue</button>
        </div>
    </div>;
  }
}

export default BarStep1;

