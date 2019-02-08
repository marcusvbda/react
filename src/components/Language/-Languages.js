import React, { Component } from 'react';
import Translate from '../Language/-Translate';
import  './Style/-Custom.scss';

class Languages extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.select = this.select.bind(this);
    this.check = this.check.bind(this);
  }

  select(lang)
  {
    this.props._app.set({language:lang});
  }

  check(lang)
  {
    if((this.props._app.get("language")===lang))
    {
      return 'selected mr-1';
    }
    else
    {
      return 'non-selected mr-1';
    }
  }
  
  render() {
    return  <div>
                <div className="title mb-1"><Translate _app={this.props._app}>translator.language</Translate></div>
                <p className="row_flag">
                    <img  className={this.check("english")} onClick={(e) => this.select("english")}  src="assets/images/unitedStates.svg" alt="English"></img>
                    <img  className={this.check("spanish")} onClick={(e) => this.select("spanish")}  src="assets/images/spain.svg" alt="Spanish"></img>
                </p>
            </div>;
  }
}

export default Languages;