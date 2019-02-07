import React, { Component } from 'react';

class Languages extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.select = this.select.bind(this);
  }

  select(lang)
  {
    this.props._app.set({language:lang});
  }
  
  render() {
    return  <div>
                <p className="title mb-1">Languages</p>
                <p>
                    <img onClick={(e) => this.select("english")}  className="mr-1" src="assets/images/unitedStates.svg" alt="English"></img>
                    <img onClick={(e) => this.select("spanish")} className="ml-1" src="assets/images/spain.svg" alt="Spanish"></img>
                </p>
            </div>;
  }
}

export default Languages;