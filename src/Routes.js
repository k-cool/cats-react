import { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App';

class Routes extends Component {
  render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path="/" component={App} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Routes;
