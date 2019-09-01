import React from 'react';
import './App.css';
import Layout from './hoc/Layout/Layout';
import {Switch, Route} from 'react-router-dom'
import Home from './containers/Home/Home';
import LeaderBoard from './containers/LeaderBoard/LeaderBoard';
import NewQuestion from './containers/NewQuestion/NewQuestion';

function App() {
  let routes = (
    <Switch>
      <Route path='/' component={Home} />
    </Switch>
  )
  return (
    <div className="App">
      <Layout>
        {routes}
      </Layout>
    </div>
  );
};

export default App;


