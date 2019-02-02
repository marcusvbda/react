import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import './assets/sass/custom.scss';
import Content from './components/Content'; 
import Navbar from './components/Navbar'; 
import Header from './components/Header'; 
import Index from './components/Home/Index'; 
import About from './components/About/About'; 



const App = () => (
  <Router>
    <div>
      <Navbar/>
      <Header/>
      <Content>
        <Route exact path="/" component={Index} />
        <Route path="/sobre" component={About} />
      </Content>
    </div>
  </Router>
);


export default App;