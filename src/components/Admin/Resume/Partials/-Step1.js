import React, { Component } from 'react';
import Template from '../../Default/Template';
import BarStep1 from './BarStep/-BarStep1';
import BarStep2 from './BarStep/-BarStep2';
import BarStep3 from './BarStep/-BarStep3';
import BarStep4 from './BarStep/-BarStep4';
import '../Style/-Custom.scss';


class Step1 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }


  showContent() {
    switch(this.props._app.get("resume").bar_step) {
      case 1:
        return  <BarStep1 _app={this.props._app}/>
      case 2:
        return  <BarStep2 _app={this.props._app}/>
      case 3:
        return  <BarStep3 _app={this.props._app}/>
      case 4:
        return  <BarStep4 _app={this.props._app}/>
      default:
        return null;
    }
  }

  render() {
    return <div>
      <Template _app={this.props._app}>
        {this.showContent()}
      </Template>
    </div>;
  }
}

export default Step1;