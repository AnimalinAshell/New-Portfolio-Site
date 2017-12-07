import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import NotFoundPage from '../components/NotFoundPage';
import Landing from '../components/Landing';
import Projects from '../components/Projects';
import About from '../components/About';
import Contact from '../components/Contact'

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route path="/" component={Landing} exact={true} />
        <Route path="/projects" component={Projects} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
