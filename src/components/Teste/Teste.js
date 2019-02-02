import React, { Component } from 'react';

class Teste extends Component {

    constructor(props) {
      super(props);
      this.teste = this.teste.bind(this);
      this.state = {isToggleOn: true};
    }
    
    teste()
    {
        console.log("props",this.props);
        console.log("state",this.state);
        alert(this.props.message);
    };
    render() {
        return <div>
            <button className="btn btn-primary" onClick={this.teste}>{this.props.children}</button>
        </div>;
    }
}

export default Teste;