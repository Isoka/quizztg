// == Import : npm
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

// == Import : local
import './app.scss';
import Header from 'src/containers/Header';
import Footer from 'src/components/Layout/Footer';
import Homepage from 'src/containers/Homepage';
import BestScores from 'src/components/BestScores';
import Login from 'src/containers/User/Login';
import Games from 'src/containers/Games';
import Entry from 'src/components/Entry';

// == Composant
const App = () => (
  <Router>
    <div id="app">
      <Header />
      <main>
        <Switch>
          <Route exact path="/">
            <Entry Component={Homepage} />
          </Route>
          <Route path="/login">
            <Entry Component={Login} />
          </Route>
          <Route path="/quizz">
            <Entry Component={Homepage} />
          </Route>
          <Route path="/bestscores">
            <Entry Component={BestScores} />
          </Route>
          <Route path="/game/:type">
            <Entry Component={Games} />
          </Route>
        </Switch>
      </main>
      <Footer />
    </div>
  </Router>
);

// == Export
export default App;
