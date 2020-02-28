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

// == Composant
const App = () => (
  <Router>
    <div id="app">
      <Header />
      <main>
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route path="/quizz">
            <Homepage />
          </Route>
          <Route path="/bestscores">
            <BestScores />
          </Route>
        </Switch>
      </main>
      <Footer />
    </div>
  </Router>
);

// == Export
export default App;
