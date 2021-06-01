import React, { Component } from 'react';
import  ReactDOM  from 'react-dom';
import MainPage from './components/pages/MainPages/MainPages'
import {  Route  } from 'react-router-dom';


import '../src/index.css';

class App extends Component {
    render() {
      return (
        <div className="app">
          <Route path="/" exact component={MainPage} />
          {/* <Route path="/schema/:id" exact component={SchemaPage} />
          <Route path="/schema/:id" exact component={SchemaPage} />
          <Route path="/schema/:id" exact component={SchemaPage} />
          <Route path="/schema/:id" exact component={SchemaPage} /> */}

        </div>
      );
    }
  }
  
  export default App;
  
