import React, { Component } from 'react';
import  ReactDOM  from 'react-dom';
import MainPage from './pages/MainPages'
import RegistrationPage from "./pages/RegistrationPage";
import LogPage from "./pages/LogPage";
import ForgotPasswordPade from "./pages/ForgotPasswordPage";
import AccumulationProgramPage from "./pages/AccumulationProgramPage";
import {  Route  } from 'react-router-dom';
import ChoiseProgram from "./pages/ChoiseProgram"

import '../src/index.css';

class App extends Component {
    render() {
      return (
        <div className="app">
          <Route path="/" exact component={MainPage} />
          <Route path="/registration" exact component={RegistrationPage} />
          <Route path="/login" exact component={LogPage} />
          <Route path="/forgotpassword" exact component={ForgotPasswordPade} />
          <Route path="/accumulationprogram" exact component={AccumulationProgramPage} />
          <Route path="/choise" exact component={ChoiseProgram} />
          {/* <Route path="/schema/:id" exact component={SchemaPage} />
          <Route path="/schema/:id" exact component={SchemaPage} />
          <Route path="/schema/:id" exact component={SchemaPage} />  */}
        </div>
      );
    }
  }
  
  export default App;
  
