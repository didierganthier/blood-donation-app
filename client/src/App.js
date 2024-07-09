import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import DonorList from './components/DonorList';
import DonorForm from './components/DonorForm';

function App() {
  return (
    <Router>
      <div>
        <h1>Blood Donation App</h1>
        <Switch>
          <Route path="/add-donor">
            <DonorForm />
          </Route>
          <Route path="/">
            <DonorList />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

