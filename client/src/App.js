import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import { clearCurrentProfile } from "./actions/profileActions";

import { Provider } from "react-redux";
import store from "./store";

import Header from "./components/Layout/Header";
import Navbar from "./components/Layout/Navbar";
import Footer from "./components/Layout/Footer";
import Login from "./components/auth/Login";
import Welcome from "./components/auth/Welcome";
import Categories from "./components/categories/Categories";
import PrivateRoute from "./components/common/PrivateRoute";
import Profile from "./components/dashboard/Profile";

import "./App.css";
import CreateProfile from "./components/create-profile/CreateProfile";
import EditProfile from "./components/edit-profile/EditProfile";
import ProfilesNew from "./components/Profiles/ProfilesNew";
import Transactions from "./components/dashboard/Transactions";
import Favorites from "./components/dashboard/Favorites";
import Loader from "./components/loader/Loader";
import AllUsers from "./components/admin/AllUsers";
import AllServices from "./components/admin/AllServices";

// Check for token
if (localStorage.jwtToken) {
  // Set auth token header auth
  setAuthToken(localStorage.jwtToken);
  // Decode token and get user info and exp
  const decoded = jwt_decode(localStorage.jwtToken);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  // Check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Clear current Profile
    store.dispatch(clearCurrentProfile());
    // Redirect to login
    window.location.href = "/";
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: true,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ active: false });
    }, 3000);
  }

  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Loader active={this.state.active} />

            <Header />

            <Route exact path="/allusers" component={AllUsers} />
            <Route exact path="/allservices" component={AllServices} />

            {/* <Route exact path="/login" component={Login} /> */}
            <Route exact path="/login" component={Welcome} />
            <Route exact path="/categories" component={Categories} />
            <Route exact path="/global-search" component={ProfilesNew} />

            <Switch>
              <PrivateRoute exact path="/dashboard" component={Profile} />
            </Switch>

            <Switch>
              <PrivateRoute
                exact
                path="/transactions"
                component={Transactions}
              />
            </Switch>

            <Switch>
              <PrivateRoute exact path="/favorites" component={Favorites} />
            </Switch>

            <Switch>
              <PrivateRoute
                exact
                path="/create-profile"
                component={CreateProfile}
              />
            </Switch>

            <Switch>
              <PrivateRoute
                exact
                path="/settings-profile"
                component={EditProfile}
              />
            </Switch>

            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
