import React, { Component } from 'react';
import './App.css';
import Layout from './hoc/Layout/Layout';
import { Switch, Route } from 'react-router-dom'
import Home from './containers/Home/Home';
import LeaderBoard from './containers/LeaderBoard/LeaderBoard';
import NewQuestion from './containers/NewQuestion/NewQuestion';
import Login from './containers/Login/Login';

class App extends Component {

  render() {
    let routes = (
      <Switch>
        <Route path='/leaderboards' component={LeaderBoard} />
        <Route path='/newquestion' component={NewQuestion} />
        <Route path='/login' component={Login} />
        <Route path='/' component={Home} />
      </Switch>
    );

    return (
      <div className="App">
        <Layout>
          {routes}
        </Layout>
      </div>
    );
  };
};



export default App;


