import { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App';

class Routes extends Component {
  render() {
    return (
      <BrowserRouter basename="https://k-cool.github.io/cats-react">
        <Switch>
          <Route exact path="/" component={App} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Routes;
