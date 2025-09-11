import React from 'react';
import './App.css';
import Parent from './components/Parent';
import { ThemeProvider, Navbar } from './context/ThemeProvider';

function App() {
  return (
    <ThemeProvider>
      <Navbar />
      <div className="App">
        <header className="App-header">
        <Parent/>
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
