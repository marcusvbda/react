import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import './assets/sass/custom.scss';
import Login from './components/Login/Login';



const App = () => (
  <Router>
    <div>
        <Route exact path="/" component={Login} />
    </div>
  </Router>
);


export default App;