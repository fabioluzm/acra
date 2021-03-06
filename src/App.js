import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Home from "./components/Home";
import About from "./components/About";
import InterventionFields from "./components/InterventionFields";
import Field from "./components/sub-components/Field";
import PageNotFound from "./components/PageNotFound";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      
      <Switch>
        <Route component={Home} path='/' exact />
        <Route component={About} path='/sobre' exact/>
        <Route component={Field} path='/valencias/:slug' exact />
        <Route component={InterventionFields} path='/valencias' exact />
        <Route component={PageNotFound} path='/404' exact />
        <Route path='*'>
          <Redirect to='/404' />
        </Route>
      </Switch>
      
      <Footer />
    </BrowserRouter>
  )
}

export default App

