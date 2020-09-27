import React from 'react';
import store from '../../redux/store';
import { Provider } from 'react-redux';
import history from '../../helpers/history.helper';

const App = () => {
  return (
    <Provider store={store}>
      <div>App is started!</div>
		</Provider>
  );
};

export default App;
