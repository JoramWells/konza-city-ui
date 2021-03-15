import React from 'react'
import './App.css';
import Components from './components/Components'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Homepage from './components/Homepage';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/dashboard" component={Components} />
        </Switch>


      </Router>


    </div>
  );
}

export default App;
