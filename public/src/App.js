
import React, { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid'
import Navbar from "./components/Navbar/Navbar";
// import './App.css'
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Signup from "./components/Auth/Signup/Signup";
import Signin from "./components/Auth/Signin/Signin";
import { useDispatch, useSelector } from 'react-redux';
import { authUserAC } from './redux/actions';
import Disk from './components/Disk/Disk';
import Login from './components/Auth/Signin/Signin';
import StickyHeadTable from './components/Disk/Table';

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
          <div></div>
          {isAuth ?

            <Switch>
              <Route exact path="/" component={StickyHeadTable} />
              <Redirect to="/" />
            </Switch>
            :
            <Switch>
              <Route path="/signin" component={Signin} />
              {true ?
                 <Route path="/signup" component={Signup} /> 
                :
                'false'}
              <Redirect to='/signin' />
            </Switch>

          }
        </div>
        {/* <StickyHeadTable /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
