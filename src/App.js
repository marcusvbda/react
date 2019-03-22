import React from "react";
import { HashRouter  as Router, Route } from "react-router-dom";
import './assets/sass/custom.scss';
import _Global from "./assets/default/_Global";
import _App from "./assets/default/_App";
import { Redirect } from 'react-router';
import Login from './components/Login/Login';
import Welcome from './components/Admin/Welcome/Welcome';
import ResumeCreate from './components/Admin/Resume/Create';
import Loading from './components/Loading/Loading';

class App extends React.Component {
  constructor(props) {
    super(props);
      this.state = _Global;
      for(var key in this._app)
      {
        this._app[key] = this._app[key].bind(this);
      }
  }
  _app = _App;
  isLogged()
  {
    let session = localStorage.getItem('auth_data');
    if(session)
    {
      session = JSON.parse(session);
      return true;
    }
    return this._app.get("auth").check;
  }
  protect_route(val)
  {
    if(!this.isLogged())
    {
      return <Redirect to="/login"/>
    }
    return val;
  }
  render() {
    return <div>
            <Loading Loading={this._app.get("loading")}/>
            <Router>
              <div>
                <Route exact path="/" render={() => this.protect_route(<Redirect to="/login"/>) } />
                <Route exact path="/login" render={() => <Login _app={this._app} /> } />
                <Route exact path="/welcome" render={() => this.protect_route(<Welcome  _app={this._app}/>)} />
                <Route exact path="/resume/create" render={() => this.protect_route(<ResumeCreate  _app={this._app}/>)} />
              </div>
            </Router>
          </div>          
  }
}

export default App;
