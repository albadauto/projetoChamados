import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/Home/Index';
import Login from './pages/Login/Index';
import { ToastContainer } from 'react-toastify';
import Sobre from './pages/sobre/Index';
import Contato from './pages/contato/Index';

const App = () => {
  return (
    <BrowserRouter>
        <Route path="/" exact component={Login} />
        <Route path="/home" exact component={Home} />
        <Route path="/sobre" exact component={Sobre} />
        <Route path="/contato" exact component={Contato} />
        <ToastContainer autoClose={3000} />

    </BrowserRouter>
  );
}

export default App;