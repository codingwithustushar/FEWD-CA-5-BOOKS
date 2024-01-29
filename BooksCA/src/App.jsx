import React from 'react';
import './App.css';
import Header from './Components/Header';
import Register from './Components/Register';
import { BrowserRouter as Routes,Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <div>
        <Header />
        {/* <Route path='/register'> */}
        <Register />
        {/* </Route> */}
        
        
      </div>
    </Routes>
  );
}

export default App;
