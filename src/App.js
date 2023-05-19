// import logo from './logo.svg';
// import './App.css';
import React from 'react';
import TaskTwo from './tasks/TaskTwo';
import { Route, Routes } from 'react-router-dom';
import ContactUs from './tasks/SignUp';

function App() {

  return (
    <div className="App">
      <Routes>
      <Route path='/' element={ <TaskTwo /> }></Route>
        <Route path='signup' element={ <ContactUs /> }></Route>
      </Routes>
    </div>
  );
}

export default App;
