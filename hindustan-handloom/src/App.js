import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from '../src/containers/HomePage';  
import ProductListPage  from '../src/containers/ProductListPage';
import ProductStore  from '../src/containers/ProductListPage/ProductStore';



function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component = { HomePage } />
          <Route path="/:slug"  component = { ProductListPage } />
          <Route path="/:cid"  component = { ProductStore } />
 
          
        </Switch>
      </Router>
     
    </div>
  );
}

export default App;
