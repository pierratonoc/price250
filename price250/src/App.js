import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import NavBar from './components/NavBar'
import AdminBar from './components/AdminBar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import AddProductPage from './pages/AddProductPage'
import UpdateProductPage from './pages/UpdateProductPage'

const isAuth = false

function App() {
  return (
    <Router>

      {isAuth ? <NavBar /> : <AdminBar />}

      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/add-product" component={AddProductPage} />
        <Route path="/update-product" component={UpdateProductPage} />
      </Switch>
      <Footer />

    </Router>
  );
}

export default App;
