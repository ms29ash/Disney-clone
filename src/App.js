import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import Detail from './Components/Detail';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Login from './Components/Login';

function App() {
  return (
    <div className="App">
      <Router>

        <Header />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/detail' element={<Detail />}></Route>
          <Route path='/login' element={<Login />}></Route>

        </Routes>

      </Router>
    </div>
  );
}

export default App;
