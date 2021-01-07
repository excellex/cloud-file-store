
import React from 'react';
import Navbar from "./components/Navbar/Navbar";
import './App.css'
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Signup from "./components/Signup/Signup";

function App() {
  return (
      <BrowserRouter>
          <div className='app'>
              <Navbar/>
              <div className="wrap">
                  <Switch>
                      <Route path="/signup" component={Signup}/>
                  </Switch>
              </div>
          </div>
      </BrowserRouter>
  );
}

export default App;
