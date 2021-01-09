
import React, { useEffect } from 'react';
import Navbar from "./components/Navbar/Navbar";
import './App.css'
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Signup from "./components/Auth/Signup/Signup";
import Signin from "./components/Auth/Signin/Signin";
import { useDispatch, useSelector } from 'react-redux';
import { authUserAC } from './redux/actionCreators';
import Disk from './components/Disk/Disk';

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
          {isAuth ?

            <Switch>
              <Route exact path="/" component={Disk} />
              <Redirect to="/" />
            </Switch>
            :
            <Switch>
              <Route path="/signin" component={Signin} />
              <Route path="/signup" component={Signup} />
              <Redirect to='/signin' />
            </Switch>

          }
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
