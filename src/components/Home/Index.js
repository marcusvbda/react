import React, { Component } from 'react';
import Teste from '../Teste/Teste'; 

class Index extends Component {
  render() {
    return <div>
            <h2 className="red">Página Index</h2>
              <Teste className="btn btn-primary" message="Deu certo seu teste">Botão de teste</Teste>
            <p className="lead">This is a great place to talk about your webpage. This template is purposefully unstyled so you can use it as a boilerplate or starting point for you own landing page designs! This template features:</p>
            <ul>
              <li>Clickable nav links that smooth scroll to page sections</li>
              <li>Responsive behavior when clicking nav links perfect for a one page website</li>
              <li>Bootstrap's scrollspy feature which highlights which section of the page you're on in the navbar</li>
              <li>Minimal custom CSS so you are free to explore your own unique design options</li>
            </ul>
          </div>;
  }
}

export default Index;