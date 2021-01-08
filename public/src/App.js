
import React from 'react';
import Navbar from "./components/Navbar/Navbar";
import './App.css'
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Signup from "./components/Signup/Signup";
import Signin from "./components/Signin/Signin";

function App() {
  return (
      <BrowserRouter>
          <div className='app'>
              <Navbar/>
              <div className="wrap">
                  <Switch>
                      <Route path="/signup" component={Signup}/>
                      <Route path="/signin" component={Signin}/>
                  </Switch>
              </div>
          </div>
      </BrowserRouter>
  );
}

export default App;
