import React from 'react';
import Routing from '../Routing'
import store from '../../redux/store';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import history from '../../helpers/history.helper';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routing />
      </Router>
		</Provider>
  );
};

export default App;
