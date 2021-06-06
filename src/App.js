import React, { Component } from 'react';
import  ReactDOM  from 'react-dom';
import MainPage from './pages/MainPages'
import RegistrationPage from "./pages/RegistrationPage";
import LogPage from "./pages/LogPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
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
          <Route path="/accumulationprogramconvert">
            <AccumulationProgramPage name="Четыре конверта"/>
          </Route>
          <Route path="/accumulationprogramjug">
            <AccumulationProgramPage name="Шесть кувшинов"/>
          </Route>
          <Route path="/accumulationprogramsafe">
            <AccumulationProgramPage name="Сейф"/>
          </Route>
          <Route path="/accumulationprogramzeroing">
            <AccumulationProgramPage name="Обнуление"/>
          </Route>
          <Route path="/accumulationprogramlatte">
            <AccumulationProgramPage name="Эффект латте"/>
          </Route>
          <Route path="/accumulationprogrampopular">
            <AccumulationProgramPage name="50/30/20"/>
          </Route>
          <Route path="/" exact component={MainPage} />

          <Route path="/choise" exact component={ChoiseProgram} />
          {/* <Route path="/schema/:id" exact component={SchemaPage} />
          <Route path="/schema/:id" exact component={SchemaPage} />
          <Route path="/schema/:id" exact component={SchemaPage} />  */}
        </div>
      );
    }
  }
  
  export default App;
  
