import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import Login from './Components/Login/Login';
import { createContext, useState } from 'react';
import Checkout from './Components/Checkout/Checkout';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Orders from './Components/Orders/Orders';
import AdminManager from './Components/AddProducts/AdminManager';
import DeleteItem from './Components/AddProducts/DeleteItem/DeleteItem';
export const Context = createContext(null);

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <Context.Provider value={[loggedInUser, setLoggedInUser]} >

      <Router >
        <Header></Header>
        <Switch>
          <Route path="/home/">
            <Home />
          </Route>
          <PrivateRoute path='/delete'>
            <DeleteItem></DeleteItem>
          </PrivateRoute>
          <Route exact path="/">
            <Home />
          </Route>
          <PrivateRoute path='/admin'>
            <AdminManager></AdminManager>
          </PrivateRoute>

          <PrivateRoute path='/checkout'>

            <Checkout ></Checkout>

          </PrivateRoute>
          <PrivateRoute path='/orders'>
            <Orders></Orders>
          </PrivateRoute>
          <Route path='/login'>
            <Login></Login>
          </Route>
        </Switch>
      </Router>
    </Context.Provider>

  );
}

export default App;
