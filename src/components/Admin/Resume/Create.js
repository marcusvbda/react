import React, { Component } from 'react';
import Step1 from './Partials/-Step1';
import Step2 from './Partials/-Step2';
import Step3 from './Partials/-Step3';
import Step4 from './Partials/-Step4';
import Step5 from './Partials/-Step5';
import Step6 from './Partials/-Step6';
import Step7 from './Partials/-Step7';
import './Style/-Custom.scss';


class Create extends Component {
  constructor(props) {
    super(props);
    this.state = {};

  }

  showStep() {
    switch(this.props._app.get("resume").step) {
      case 1:
        return <Step1 _app={this.props._app} />
      case 2:
        return <Step2 _app={this.props._app} />
      case 3:
        return <Step3 _app={this.props._app} />
      case 4:
        return <Step4 _app={this.props._app} />
      case 5:
        return <Step5 _app={this.props._app} />
      case 6:
        return <Step6 _app={this.props._app} />
      case 7:
        return <Step7 _app={this.props._app} />
      default:
        return null;
    }
  }

  render() {
    return this.showStep();
  }
}

export default Create;