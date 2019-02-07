import React, { Component } from 'react';
import english from '../../assets/langs/english.js'; 
import spanish from '../../assets/langs/spanish.js'; 

class Translate extends Component {
  constructor(props) {
      super(props);
      this.state = {
        language : "english",
        _words:{english,spanish}
      };
      this.getValue = this.getValue.bind(this);
  }
  getValue(){
      let text = this.state._words[this.props._app.get("language")][this.props.children];
      return (text ? text : this.props.children);
  };
  render() {
    return <div>
      {this.getValue()}
    </div>;
  }
}

export default Translate;