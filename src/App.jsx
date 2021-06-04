import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './views/Home';
import About from './views/About';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home title="Home" />
        </Route>
        <Route exact path="/about">
          <About title="About" />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
