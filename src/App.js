import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import './assets/sass/custom.scss';
import _Global from "./assets/default/_Global";
import _App from "./assets/default/_App";
import { Redirect } from 'react-router';
import Login from './components/Login/Login';
import Welcome from './components/Admin/Welcome/Welcome';
// import NotFound from './components/Error/NotFound';
import Home from './components/Admin/Home/Home';
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
    return this._app.get("auth").check;
  }
  protect_route(val)
  {
    if(!this.isLogged())
    {
      return <Redirect to="login"/>
    }
    return val;
  }
  render() {
    return <div>
            <Loading Loading={this._app.get("loading")}/>
            <Router>
              <div>
                <Route exact path="/login" render={() => <Login _app={this._app} /> } />
                <Route exact path="/" render={() => this.protect_route(<Home  _app={this._app}/>)} />
                <Route exact path="/welcome" render={() => this.protect_route(<Welcome  _app={this._app}/>)} /> */}
                {/* <Route path="*"  render={() => <NotFound  _app={this._app}/>} /> */}
              </div>
            </Router>
          </div>          
  }
}

export default App;
