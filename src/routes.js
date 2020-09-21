import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import ContactPage from './pages/contact';
import BrandPage from './pages/brand';
import FaqsPage from './pages/faqs';
import SupportPage from './pages/support';
import IndexPage from './pages';

class App extends Component {
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path="/contact" component={ContactPage} />
          <Route exact path="/brand" component={BrandPage} />
          <Route exact path="/faqs" component={FaqsPage} />
          <Route exact path="/support" component={SupportPage} />
          <Route exact path="/" component={IndexPage} />
        </Switch>
      </Router>
    );
  }
}

export default App;
