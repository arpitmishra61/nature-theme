import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import UserInfo from './consumers/UserInfo';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <div className="transparent">
          <UserInfo />
        </div>

      </div>
    </Provider>
  );
}

export default App;
