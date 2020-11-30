import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './containers/Home';
import Signin from './containers/Signin';
import Signup from './containers/Signup';
import PrivateRoute from '../src/components/HOC/PrivateRoute';
import { useDispatch, useSelector } from 'react-redux';
import { isUserLoggedIn } from '../src/actions';
import  Products from '../src/containers/Products';
import  Orders from '../src/containers/Orders';
import Category from './containers/Category';
import '../src/components/Layout/style.css';
import { getInitialData } from './actions/initialData.action';
import NewPage from './containers/NewPage';

function App() {

const dispatch = useDispatch();
const auth =  useSelector( state => state.auth);

  useEffect(() => {
    if(!auth.authenticate){
      dispatch(isUserLoggedIn());
    }
    dispatch(getInitialData());

  }, [dispatch, auth.authenticate]);


  return (
    <div className="App">
      
     
{/* <Router> */}
  <Switch>
    <PrivateRoute path="/" exact component={ Home } /> 
    <PrivateRoute path="/page"  component={ NewPage } /> 
    <PrivateRoute path="/category"  component={ Category } /> 
    <PrivateRoute path="/products"  component={ Products } /> 
    <PrivateRoute path="/orders"  component={ Orders } /> 

    <Route path="/Signin" component={Signin} /> 
    <Route path="/Signup" component={Signup} /> 
  </Switch>
{/* </Router> */}

    </div>
  );
}

export default App;
