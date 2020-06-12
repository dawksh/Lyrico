import React from 'react';
import './App.css';
import Lyrics from './components/Lyrics';
import Nav from './components/Nav';

const App = () => {
  return (
    <div className="App">
      <Nav />
      <div className="lyricsWrapper">
        <Lyrics />
      </div>
    </div>
  )
}

export default App;
