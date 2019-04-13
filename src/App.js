import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.js';

import {BrowserRouter, Route} from 'react-router-dom';

import Principal from './componentes/Default';

import './App.css';
import Preguntas from './componentes/Preguntas';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <main className="container-fluid">
           <Route  exact path='/' component={Principal}/>
        </main>
      </BrowserRouter>
    );
  }
}

export default App;
