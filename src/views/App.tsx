import React from 'react';
import './App.css';
import Content from '../components/Content';
import Nav from '../components/Nav'
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
      <Router>
        <Nav />
        <Content />
      </Router>
  );
}

export default App;
