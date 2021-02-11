import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Users from './pages/Users';
import Basic_details from './pages/Basic_details';
import About from './pages/About';
import Userdetails from './pages/Userdetails';

import{
  BrowserRouter,
  Switch,
  Route,
  Link
}
from 'react-router-dom';




class App extends React.Component {
  render(){
  return (
   <div className="App">
    <BrowserRouter>
    <div className="App">
      <div>
        {/* <Link to="/">Home</Link>
        <Link to="/register">REgister</Link> */}
      </div>

      <div>
        <Switch>
            <Route path="/" exact={true}>
                  <Home />
            </Route>
            <Route path="/register">
                  <Register />
            </Route>
            <Route path="/login">
                  <Login />
            </Route>
            <Route path="/users">
              <Users />
          </Route>
          <Route path="/basic_details">
              <Basic_details />
          </Route>
         
          <Route path="/about">
              <About />
          </Route>
          <Route path="/userdetails">
              <Userdetails />
          </Route>
        </Switch>
      </div>
    </div>
    </BrowserRouter>
   </div>
  );
}
}
export default App;


