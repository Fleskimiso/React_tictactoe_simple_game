import React from 'react';
import Board from './components/Board';
import BoardContextProvider from './Context/BoardContext';
import Info from './components/Info';
import Result from './components/Result';


function App() {
  return (
    <div className="App">
      <div className="welcome">Welcome to the tic tac toe game.</div>
       <BoardContextProvider>
         <Info/>
       <Board/>
        <Result/> 
       </BoardContextProvider>
    </div>
  );
}

export default App;
