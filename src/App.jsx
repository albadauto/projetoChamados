import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home/Index';
import Login from './pages/Login/Index';
import { ToastContainer } from 'react-toastify';
import Sobre from './pages/sobre/Index';
import Header from './components/Header/Index';

const App = () => {
  return (
    <BrowserRouter>
        <Route path="/" exact component={Login} />
        <Route path="/home" exact component={Home} />
        <Route path="/sobre" exact component={Sobre} />
        <ToastContainer autoClose={3000} />

    </BrowserRouter>
  );
}

export default App;