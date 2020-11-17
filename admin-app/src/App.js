import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './containers/Home';
import Signin from './containers/Signin';
import Signup from './containers/Signup';
import PrivateRoute from '../src/components/HOC/PrivateRoute';
import { useDispatch, useSelector } from 'react-redux';
import { isUserLoggedIn } from '../src/actions/auth.actions';

function App() {

const dispatch = useDispatch();
const auth =  useSelector( state => state.auth);



  useEffect(() => {
    if(!auth.authenticate){
      dispatch(isUserLoggedIn());
    }
  }, []);


  return (
    <div className="App">
      
     
{/* <Router> */}
  <Switch>
    <PrivateRoute path="/" exact component={Home} /> 
    <Route path="/Signin" component={Signin} /> 
    <Route path="/Signup" component={Signup} /> 
  </Switch>
{/* </Router> */}

    </div>
  );
}

export default App;
