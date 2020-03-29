// React.
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import DataState from './context/data/DataState';

// Page components.
import { Container } from 'reactstrap';
import NavigationBar from './components/layout/NavigationBar';
import Landing from './components/pages/Landing';
import NotFound from './components/pages/NotFound';

// Stylesheet.
import './styles/App.scss';

const App = () => {
  return (
    <DataState>
      <Router>
        <div className='App'>
          <NavigationBar />
          <Container className='mt-4 mb-5'>
            <Switch>
              <Route exact path='/' component={Landing} />
              <Route component={NotFound} />
            </Switch>
          </Container>
        </div>
      </Router>
    </DataState>
  );
};

export default App;
