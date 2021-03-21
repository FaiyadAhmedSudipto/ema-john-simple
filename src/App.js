import './App.css';
import Theme from './components/HomePage/Theme';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './images/Header.jpg';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './components/Login/Login';
import { createContext, useState } from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import NotFound from './components/NotFound/NotFound';
import Details from './components/VehiclesDetails/Details';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <div className="header">
          <img src={logo} alt=""></img>
          <nav>
            <Link to="/home">Home</Link>
            <Link to="/details">Details</Link>
            <Link to="/login">Login</Link>
            <Link to="/login">{loggedInUser.name}</Link>
          </nav>
        </div>
        <Switch>
          <Route path="/home">
            <Theme></Theme>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/details">
            <Details></Details>
          </PrivateRoute>
          {/* ====>>>>> Tried To Create Multiple "Private_Route". Or, Unique "Private Rout". But Failed! */}
          {/* <PrivateRoute path="/service/:names">
            <Price></Price>
          </PrivateRoute> */}
          <Route exact path="/">
            <Theme></Theme>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;

