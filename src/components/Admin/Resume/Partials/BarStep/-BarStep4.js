import React, { Component } from 'react';
import UploadArea from '../../../Default/-UploadArea';
import '../../Style/-Custom.scss';

const style = {
  filter: "invert(100%)",
  width: "22px"
};

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
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-black-800"><b>Resume</b></h1>
      </div>

      <div className="row mb-0">
        <div className="col-12">
          <small className="small">Please upload your resume or connect your LinkedIn account. If you do not have a resume or a LinkedIn account, please continue the application.</small>
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-md-12">
            <UploadArea />
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-md-12 text-center">
          <h6 className="lined">OR</h6>
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-md-12 text-center">
          <button className="btn btn-primary pt-0 pb-0">
            <div className="row d-flex aling-items-center">
              <div className="col-2 pt-1 pb-2">
                <img style={style} src="assets/images/in.svg" alt="" />
              </div>
              <div className="col-10 p-2">
                Application com LinkedIn
              </div>
            </div>
          </button>
        </div>
      </div>

      <div className="row text-right mr-0 mt-3 mb-3 resume_continue">
        <span className="col-md-10"></span>
        <button className="col-md-2 btn_continue text-center" onClick={(e) => this.continue()}>Continue</button>
      </div>
    </div>;
  }
}

export default BarStep4;

