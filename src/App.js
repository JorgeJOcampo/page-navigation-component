import React from 'react';
import logo from './logo.svg';
import './App.css';
import PageNavigator from './components/PageNavigator';

function App() {
  return (
    <div className="App">
        <PageNavigator cant={5}/>
    </div>
  );
}

export default App;
