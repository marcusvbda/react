import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import './assets/sass/custom.scss';
import Login from './components/Login/Login';
import _Global from "./assets/default/_Global";
import _App from "./assets/default/_App";
class App extends React.Component {
  constructor(props) {
    super(props);
      this.state = _Global;
      Object.keys(this._app).forEach(function(method)
      {
        this._app[method] = this._app[method].bind(this);
      }.bind(this));
  }
  _app = _App;
  
  render() {
    return <Router>
      <div>
        <Route exact path="/" render={() => <Login _app={this._app} />} />
      </div>
    </Router>
  }
}

export default App;
