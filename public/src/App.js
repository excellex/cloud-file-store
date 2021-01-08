
import React, { useEffect } from 'react';
import Navbar from "./components/Navbar/Navbar";
import './App.css'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Signup from "./components/Signup/Signup";
import Signin from "./components/Signin/Signin";
import { useDispatch, useSelector } from 'react-redux';
import { authUserAC } from './redux/actionCreators';

function App() {
  const dispatch = useDispatch()
  const isAuth = useSelector(store => store.user.isAuth)

  useEffect(() => {
    dispatch(authUserAC())
  }, [])

  return (
    <BrowserRouter>
      <div className='app'>
        <Navbar />
        <div className="wrap">
          {!isAuth &&
            <Switch>
              <Route path="/signup" component={Signup} />
              <Route path="/signin" component={Signin} />
            </Switch>}
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
