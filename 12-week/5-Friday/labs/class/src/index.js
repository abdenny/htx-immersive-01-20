import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import BaseLayout from './components/layout/BaseLayout'
import ProjectManagement from './components/projectManagement/ProjectManagement'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <BrowserRouter>
    <BaseLayout>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/projectmanagement" component={ProjectManagement} />
      </Switch>
    </BaseLayout>
  </BrowserRouter>,
  document.getElementById('root')
);


