import React, { Component } from 'react';
import Template from '../Default/Template';
import Input from '../Default/-Input';
import Translate from '../../Language/-Translate';
import './Style/-Custom.scss';


class Create extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.continue = this.continue.bind(this);

  }
  continue() {
    alert("continue");
  }
  render() {
    return <div>
      <Template _app={this.props._app}>


        <div className="d-sm-flex align-items-center justify-content-between mb-3">
          <h1 className="h3 mb-0 text-black-800"><b><Translate _app={this.props._app}>resume_create.basic_information</Translate></b></h1>
        </div>

        <div className="row mb-0">
          <div className="col-12">
            <h5><Translate _app={this.props._app}>resume_create.identiy</Translate></h5>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <Input placeholder={<Translate _app={this.props._app}>resume_create.first_name*</Translate>} name="first_name" required />
          </div>
          <div className="col-md-4">
            <Input placeholder={<Translate _app={this.props._app}>resume_create.middle_name</Translate>} name="middle_name" />
          </div>
          <div className="col-md-4">
            <Input placeholder={<Translate _app={this.props._app}>resume_create.last_name*</Translate>}name="last_name" required />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <Input placeholder={<Translate _app={this.props._app}>resume_create.maiden_name</Translate>} name="maiden_name" />
          </div>
          <div className="col-md-6">
            <Input placeholder="Social Security*" name="social_security" required />
          </div>
        </div>

        <div className="row mt-3  mb-0">
          <div className="col-12">
            <h5><Translate _app={this.props._app}>resume_create.contact_information</Translate></h5>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <Input placeholder="Email" name="email" type="email" />
          </div>
          <div className="col-md-6">
            <Input placeholder={<Translate _app={this.props._app}>resume_create.primary_phone*</Translate>} name="primary_phone" required />
          </div>
        </div>

        <div className="row mt-3  mb-0">
          <div className="col-12">
            <h5><Translate _app={this.props._app}>resume_create.address</Translate></h5>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <Input placeholder={<Translate _app={this.props._app}>resume_create.address</Translate>} name="address" />
          </div>
          <div className="col-md-6">
            <Input placeholder={<Translate _app={this.props._app}>resume_create.address_2</Translate>} name="address_2" />
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
            <Input placeholder={<Translate _app={this.props._app}>resume_create.city*</Translate>} name="city" required />
          </div>
          <div className="col-md-3">
            <Input placeholder={<Translate _app={this.props._app}>resume_create.state*</Translate>}  name="state" required />
          </div>
          <div className="col-md-3">
            <Input placeholder={<Translate _app={this.props._app}>resume_create.zip*</Translate>}  name="zip" required />
          </div>
          <div className="col-md-3">
            <Input placeholder={<Translate _app={this.props._app}>resume_create.country*</Translate>}  name="country" required />
          </div>
        </div>

        <div className="row text-right mr-0 mt-2">
          <span className="col-md-10"></span>
          <button className="col-md-2 btn_continue text-center" onClick={(e) => this.continue()} ><Translate _app={this.props._app}>welcome.continue</Translate></button>
        </div>

      </Template>
    </div>;
  }
}

export default Create;