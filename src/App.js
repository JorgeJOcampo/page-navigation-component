import React from 'react';
import './App.css';
import PageNavigator from './components/PageNavigator';
import PageNavigatorStyled from './components/PageNavigatorStyled';

function App() {
  return (
    <div className="App">
        <h1>CSS</h1>
        <PageNavigator cant={5}/>
        <h1>Styled Components</h1>
        <PageNavigatorStyled cant={5} theme={'dark'}/>
        <PageNavigatorStyled cant={5} theme={'light'}/>
        <PageNavigatorStyled cant={5} theme={'pastel'}/>
        
    </div>
  );
}

export default App;
