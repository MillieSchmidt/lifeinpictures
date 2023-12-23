import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Main from './views/Main';
import ScrollToTop from './components/ScrollToTop';
import './App.css';

function App() {
  return (
    <Router>
      <ScrollToTop>
        <div>
          <Main />
        </div>
      </ScrollToTop>
    </Router>
  );
}

export default App;
