import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import Bookmark from './components/Bookmark'
import Tag from './components/Tag'
import Display from './components/Display'
import Head from './components/Head'

function App() {
  return (
    <Router>
      <Head />
      <Switch>
        <Route path='/' exact component={ Home }/>
      </Switch>
      <Switch>
        <Route path='/bookmark' exact component={ Bookmark }/>
      </Switch>
      <Switch>
        <Route path='/tag' exact component={ Tag }/>
      </Switch>
      <Switch>
        <Route path='/display' exact component={ Display }/>
      </Switch>
    </Router>
  );
}

export default App;
